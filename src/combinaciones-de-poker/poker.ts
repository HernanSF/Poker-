import { Carta } from "../elementos-principales/carta";
import { CombinacionIguales } from "../elementos-principales/combinacion-iguales";
import { CartaMasAlta } from "./carta-mas-alta";

export class Poker extends CombinacionIguales {
  public ranking: number = 7;

  public constructor(mano: Carta[]) {
    super(mano, 3);
    this.cartas = this.cartas.concat(new CartaMasAlta(mano, 5 - this.cartas.length).cartas);
  }
}
