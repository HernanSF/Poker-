import { Carta } from "../elementos-principales/carta";
import { CombinacionIguales } from "../elementos-principales/combinacion-iguales";

export class Poker extends CombinacionIguales {
  public puntajeBase: number = 7;

  public constructor(mano: Carta[]) {
    super(mano, 3);
    if (this.cartas.length === 4) {
      this.puntajeIgualado = this.cartas[0].valor;
    }
  }
}
