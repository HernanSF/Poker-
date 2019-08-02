import { Carta } from "../elementos-principales/carta";
import { Escalera } from "./escalera";

export class EscaleraColor extends Escalera {
  public puntajeBase: number = 8;

  public constructor(mano: Carta[]) {
    super(mano);
    if (this.cartas.length === 5) {
      let paloReferencia = this.cartas[0].palo;
      let encontrePaloDiferente = this.cartas.find((carta) => carta.palo !== paloReferencia);
      if (encontrePaloDiferente !== undefined) {
        this.cartas = [];
      } else {
        this.puntajeIgualado = this.cartas[0].valor;
      }
    } else {
      this.cartas = [];
    }
  }
}
