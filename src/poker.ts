import { Carta } from "./Carta";
import { CombinacionIguales } from "./CombinacionIguales";

export class Poker extends CombinacionIguales {
  protected valorBase: number;
  public constructor(mano: Carta[]) {
    super(mano, 3)
  }
}