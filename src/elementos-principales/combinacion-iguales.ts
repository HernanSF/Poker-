import { Combinacion } from "./combinacion";
import { Carta } from "./carta";

export class CombinacionIguales extends Combinacion {
  public ranking: number;

  public constructor(mano: Carta[], distancia: number) {
    super();
    mano.sort((a, b) => b.valor - a.valor);
    let index: number = 0;
    let termine: boolean = false;
    let numeros: number[] = mano.map((carta) => carta.valor);
    while (!termine) {
      let indicesIguales = numeros.lastIndexOf(mano[index].valor);
      let cantidadIguales = distancia + 1;
      if (indicesIguales - index >= distancia) {
        this.cartas = mano.splice(index, cantidadIguales);
        return;
      }
      index = indicesIguales + 1;
      termine = index > mano.length - 2;
    }
  }
}
