import { Carta } from "./carta";

export abstract class Combinacion {
  constructor(mano) {
    mano.sort((a, b) => b.valor - a.valor);
  }
  public cartas: Carta[] = [];
  public ranking: number;
}
