import { Combinacion } from "./combinacion";
import { Carta } from "./Carta";
import { Pierna } from "./pierna";
import { Par } from "./par";

export class Full extends Combinacion {
  public get valor(): number {
    return this.valorBase + this.cartas[0].valor + this.cartas[3].valor;
  }
  protected valorBase: number = 50;

  constructor(mano: Carta[]) {
    super();
    let primero = new Pierna(mano);
    let segundo = new Par(mano);
    this.cartas = primero.cartas.concat(segundo.cartas);
  }
}
