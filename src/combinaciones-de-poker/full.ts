import { Combinacion } from "../elementos-principales/combinacion";
import { Carta } from "../elementos-principales/carta";
import { Pierna } from "./pierna";
import { Par } from "../combinaciones-de-poker/par";

export class Full extends Combinacion {
  public ranking: number = 6;

  constructor(mano: Carta[]) {
    super();
    const primero = new Pierna(mano, false);
    const segundo = new Par(mano, false);

    this.cartas = primero.cartas.concat(segundo.cartas);
  }
}
