import { Carta } from "./Carta";
import { Combinacion } from "./combinacion";

export class Escalera extends Combinacion {
  protected valorBase: number = 100;

  public constructor(mano: Carta[], cantidadConsecutivos: number = 5) {
    super();
    let index: number = 0;
    let consecutivos: number = 0;
    let termine: boolean = false;

    while (consecutivos < cantidadConsecutivos && !termine) {
      const actual = mano[index].valor;
      const siguiente = mano[index + 1].valor;

      if (actual - siguiente === 1) {
        consecutivos++;
      } else {
        consecutivos = 0;
      }

      index++;
      termine = index > mano.length - 2;
    }

    if (consecutivos >= cantidadConsecutivos - 1) {
      this.cartas = mano.splice(index - consecutivos, cantidadConsecutivos);
      return;
    }
  }
}
