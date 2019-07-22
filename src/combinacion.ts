import { Carta } from "./carta";

export abstract class Combinacion {
  public get valor(): number {
    if (this.cartas.length > 0) {
      return this.valorBase + this.cartas[0].valor;
    }

    return this.valorBase;
  }

  public cartas: Carta[] = [];
  protected abstract valorBase: number;
}
