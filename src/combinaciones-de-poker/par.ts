import { Carta } from "../elementos-principales/carta";
import { CombinacionIguales } from "../elementos-principales/combinacion-iguales";
import { CartaMasAlta } from "./carta-mas-alta";

export class Par extends CombinacionIguales {
  public ranking: number = 1;

  public constructor(mano: Carta[], buscarMasAlta: boolean = true) {
    super(mano, 1);
    if (buscarMasAlta) {
      this.cartas = this.cartas.concat(new CartaMasAlta(mano, 5 - this.cartas.length).cartas);
    }
  }
}
