import { Combinacion } from "../combinacion";
import { Carta } from "../carta";
import { Par } from "../combinaciones-de-poker/par";

export class DoblePar extends Combinacion {
  public puntajeBase: number = 2;
  public puntajeIgualado: number;

  constructor(mano: Carta[]) {
    super();
    let primero = new Par(mano);
    let segundo = new Par(mano);
    this.cartas = primero.cartas.concat(segundo.cartas);
    if (this.cartas.length === 4) {
      this.puntajeIgualado = this.cartas[0].valor * 100 + this.cartas[2].valor;
    }
  }
}
