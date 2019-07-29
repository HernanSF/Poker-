import { Carta } from "../carta";
import { CombinacionIguales } from "../combinacion-iguales";

export class Poker extends CombinacionIguales {
  public puntajeBase: number = 7;

  public constructor(mano: Carta[]) {
    super(mano, 3);
    this.puntajeIgualado = this.cartas[0].valor;
  }
}
