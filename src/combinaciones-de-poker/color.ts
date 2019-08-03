import { Carta } from "../elementos-principales/carta";
import { Combinacion } from "../elementos-principales/combinacion";

export class Color extends Combinacion {
  public ranking: number = 5;

  public constructor(mano: Carta[], distancia: number = 4) {
    super();
    mano.sort(function comparacion(a, b) {
      if (a.palo > b.palo) {
        return -1;
      }
      if (b.palo > a.palo) {
        return 1;
      }
      return 0;
    });
    let index: number = 0;
    let termine: boolean = false;
    const palos: string[] = mano.map((carta) => carta.palo);

    while (!termine) {
      const indiceMismoPalo = palos.lastIndexOf(mano[index].palo);
      const cantidadMismoPalo = distancia + 1;
      if (indiceMismoPalo - index >= distancia) {
        this.cartas = mano.splice(index, indiceMismoPalo - index + 1);
        this.cartas.sort((a, b) => b.valor - a.valor);
        this.cartas = this.cartas.splice(0, cantidadMismoPalo);
        return;
      }
      index = indiceMismoPalo + 1;
      termine = index > mano.length - 2;
    }
  }
}
