import { Carta } from "../elementos-principales/carta";
import { CombinacionIguales } from "../elementos-principales/combinacion-iguales";
import { CartaMasAlta } from "./carta-mas-alta";

export class Pierna extends CombinacionIguales {
  public ranking: number = 3;
  public puntajeIgualado: number;

  public constructor(mano: Carta[], buscarMasAlta: boolean = true) {
    super(mano, 2);
    if (buscarMasAlta) {
      this.cartas = this.cartas.concat(new CartaMasAlta(mano, 5 - this.cartas.length).cartas);
    }
  }
}
