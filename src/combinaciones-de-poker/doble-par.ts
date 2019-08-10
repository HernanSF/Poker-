import { Combinacion } from "../elementos-principales/combinacion";
import { Carta } from "../elementos-principales/carta";
import { Par } from "../combinaciones-de-poker/par";
import { CartaMasAlta } from "./carta-mas-alta";

export class DoblePar extends Combinacion {
  public ranking: number = 2;

  constructor(mano: Carta[]) {
    super(mano);
    let primero = new Par(mano, false);
    let segundo = new Par(mano, false);
    this.cartas = primero.cartas.concat(segundo.cartas);
    this.cartas = this.cartas.concat(new CartaMasAlta(mano, 5 - this.cartas.length).cartas);
  }
}
