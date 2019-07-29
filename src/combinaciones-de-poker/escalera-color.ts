import { Carta } from "../carta";
import { Escalera } from "./escalera";

export class EscaleraColor extends Escalera {
  public puntajeBase: number = 8;

  public constructor(mano: Carta[]) {
    super(mano);
    let paloReferencia = this.cartas[0].palo;
    let paloCarta = this.cartas.find((carta) => carta.palo !== paloReferencia);
    if (paloCarta !== undefined) {
      this.cartas = [];
    } else {
      this.puntajeIgualado = this.cartas[0].valor
    }
  }
}
