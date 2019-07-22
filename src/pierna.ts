import { Carta } from "./Carta";
import { CombinacionIguales } from "./combinacion-iguales";
export class Pierna extends CombinacionIguales {
  protected valorBase: number;
  public constructor(mano: Carta[]) {
    super(mano, 2)
  }
}