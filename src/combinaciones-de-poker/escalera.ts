import { Carta } from "../carta";
import { Combinacion } from "../combinacion";

export class Escalera extends Combinacion {
  public puntajeBase: number = 4;
  public puntajeIgualado: number;

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
      } else if (actual - siguiente === 0) {
        mano.splice(index + 1, 1);
        index--
      } else {
        consecutivos = 0;
      }

      index++;
      termine = index > mano.length - 2 || consecutivos === cantidadConsecutivos - 1;
    }

    if (consecutivos === cantidadConsecutivos - 1) {
      this.cartas = mano.splice(index - consecutivos, cantidadConsecutivos);
      this.puntajeIgualado = this.cartas[0].valor;
      return;
    }
  }
}
