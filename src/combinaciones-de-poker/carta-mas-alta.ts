import { Carta } from "../elementos-principales/carta";
import { Combinacion } from "../elementos-principales/combinacion";

export class CartaMasAlta extends Combinacion {
  public puntajeBase: number = 0;
  public puntajeIgualado: number = 0;

  public constructor(mano: Carta[], cantidad: number) {
    super();
    this.cartas = this.cartas.concat(mano.splice(0, cantidad));
    if (this.cartas.length === cantidad) {
      let index: number = 0;
      while (index < cantidad) {
        this.puntajeIgualado = this.puntajeIgualado + this.cartas[index].valor;
        index++;
      }
    }
  }
}
