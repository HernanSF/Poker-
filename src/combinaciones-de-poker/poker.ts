import { Carta } from "../carta";
import { CombinacionIguales } from "../combinacion-iguales";

export class Poker extends CombinacionIguales {
  protected valorBase: number;
  public constructor(mano: Carta[]) {
    super(mano, 3)
  }
}