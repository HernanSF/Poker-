import { Carta } from "../elementos-principales/carta";
import { CombinacionIguales } from "../elementos-principales/combinacion-iguales";

export class Par extends CombinacionIguales {
  public puntajeBase: number = 1;
  public puntajeIgualado: number;

  public constructor(mano: Carta[]) {
    super(mano, 1);
    if (this.cartas.length === 2) {
      this.puntajeIgualado = this.cartas[0].valor;
    }
  }
}
