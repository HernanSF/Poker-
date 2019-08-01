import { Combinacion } from "../combinacion";
import { Carta } from "../Carta";
import { Pierna } from "./pierna";
import { Par } from "../combinaciones-de-poker/par";

export class Full extends Combinacion {
  public puntajeBase: number = 6;

  constructor(mano: Carta[]) {
    super();
    let primero = new Pierna(mano);
    let segundo = new Par(mano);

    this.cartas = primero.cartas.concat(segundo.cartas);
    if (this.cartas.length === 5) {
      this.puntajeIgualado = this.cartas[0].valor * 100 + this.cartas[3].valor;
    }
  }
}
