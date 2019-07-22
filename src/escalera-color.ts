import { Carta } from "./carta";
import { Escalera } from "./escalera";

export class EscaleraColor extends Escalera {
  protected valorBase: number = 200;

  public constructor(mano: Carta[]) {
    super(mano);
    if (this.cartas.find((carta) => (carta.palo !== this.cartas[0].palo) !== undefined)) {
      this.cartas = [];
    }
  }
}
