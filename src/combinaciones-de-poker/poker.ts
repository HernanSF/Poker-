import { Carta } from "../carta";
import { CombinacionIguales } from "../combinacion-iguales";

export class Poker extends CombinacionIguales {
  public puntajeBase: number = 7;

  public constructor(mano: Carta[]) {
    super(mano, 3);
    if (this.cartas.length === 4) {
      this.cartas = this.cartas.concat(mano.splice(0, 1));
      this.puntajeIgualado = this.cartas[0].valor * 100 + this.cartas[4].valor;
    }
  }
}
