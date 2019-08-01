import { Carta } from "../carta";
import { CombinacionIguales } from "../combinacion-iguales";
import { CartaMasAlta } from "./carta-mas-alta";

export class Pierna extends CombinacionIguales {
  public puntajeBase: number = 3;
  public puntajeIgualado: number;

  public constructor(mano: Carta[]) {
    super(mano, 2);
    if (this.cartas.length === 3) {
      this.puntajeIgualado = this.cartas[0].valor;
    } 
  }
}
