import { Carta } from "../carta";
import { CombinacionIguales } from "../combinacion-iguales";

export class Pierna extends CombinacionIguales {
  public puntajeBase: number = 3;
  public puntajeIgualado: number;

  public constructor(mano: Carta[]) {
    super(mano, 2)
    this.puntajeIgualado = this.cartas[0].valor
  }
}