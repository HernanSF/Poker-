import { Carta } from "../elementos-principales/carta";
import { Escalera } from "./escalera";

export class EscaleraColor extends Escalera {
  public ranking: number = 8;

  public constructor(mano: Carta[]) {
    super(mano);
    if (this.cartas.length === 5) {
      const paloReferencia = this.cartas[0].palo;
      const encontrePaloDiferente = this.cartas.find((carta) => carta.palo !== paloReferencia);
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
