import { Carta } from "../carta";
import { Combinacion } from "../combinacion";

export class CartaMasAlta extends Combinacion {
  public puntajeBase: number = 0;
  public puntajeCartaMasAlta: number = 0;

  public constructor(mano: Carta[], cantidad: number) {
    super();
    this.cartas = this.cartas.concat(mano.splice(0, cantidad));
    if (this.cartas.length === cantidad) {
      let index: number = 0;
      while (index < cantidad) {
        this.puntajeCartaMasAlta = this.puntajeCartaMasAlta + this.cartas[index].valor;
        index++;
      }
    }
  }
}
