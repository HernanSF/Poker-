import { Combinacion } from "combinacion";
import { Carta } from "carta";

export class Par extends Combinacion {
  protected valorBase: number;

  public constructor(mano: Carta[], cantidadIguales: number = 2) {
    super();
    let index: number = 0;
    let iguales: number = 1;
    let termine: boolean = false;

    while (iguales < cantidadIguales && !termine) {
      const actual = mano[index].valor;
      const siguiente = mano[index + 1].valor;

      if (actual - siguiente === 0) {
        iguales++;
      }

      index++;
      termine = index > mano.length - 2;
    }
    if (iguales === cantidadIguales) {
      this.cartas = mano.splice(index - 1, cantidadIguales);
      this.cartas.push(mano[0], mano[1], mano[2]);
      return;
    } else {
      return;
    }
  }
}
