import { Carta } from "../elementos-principales/carta";
import { Combinacion } from "../elementos-principales/combinacion";

export class CartaMasAlta extends Combinacion {
  public ranking: number = 0;

  public constructor(mano: Carta[], cantidad: number) {
    super();
    this.cartas = this.cartas.concat(mano.splice(0, cantidad));
  }
}
