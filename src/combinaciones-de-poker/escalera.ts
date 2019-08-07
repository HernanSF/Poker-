import { Carta } from "../elementos-principales/carta";
import { Combinacion } from "../elementos-principales/combinacion";

export class Escalera extends Combinacion {
  public ranking: number = 4;
  public puntajeIgualado: number;

  public constructor(mano: Carta[], cantidadConsecutivos: number = 5) {
    super();
    mano.sort((a, b) => b.valor - a.valor);
    let index: number = 0;
    let consecutivos: number = 0;
    let termine: boolean = false;

    while (consecutivos < cantidadConsecutivos && !termine) {
      const actual = mano[index].valor;
      const siguiente = mano[index + 1].valor;

      if (actual - siguiente === 1) {
        this.cartas.push(mano[index]);
        consecutivos++;
      } else if (actual - siguiente !== 0) {
        consecutivos = 0;
        this.cartas = [];
      }

      index++;
      termine = index > mano.length - 2 || consecutivos === cantidadConsecutivos - 1;
    }

    if (consecutivos === cantidadConsecutivos - 1) {
      this.cartas.push(mano[index]);
      this.puntajeIgualado = this.cartas[0].valor;
      return;
    } else {
      // No tengo los consecutivos necesarios para hacer una escalera
      this.cartas = [];
    }
  }
}
