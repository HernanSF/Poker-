import { Combinacion } from "./combinacion";
import { Carta } from "./Carta";
import { Par } from "./par";

export class DoblePar extends Combinacion {
  protected valorBase: number = 50;

  constructor(mano: Carta[]) {
    super();
    let primero = new Par(mano);
    let segundo = new Par(mano);
    this.cartas = primero.cartas.concat(segundo.cartas);
  }
}
