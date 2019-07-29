import { Carta } from "../carta";
import { CombinacionIguales } from "../combinacion-iguales";

export class Par extends CombinacionIguales {
  public puntajeBase: number = 1;
  public puntajeIgualado: number;

  public constructor(mano: Carta[]) {
    super(mano, 1);
    this.puntajeIgualado = this.cartas[0].valor
  }
}
