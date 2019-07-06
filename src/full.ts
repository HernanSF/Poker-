import { Combinacion } from "./combinacion";

export class Full extends Combinacion {
  public get valor(): number {
    return this.valorBase + this.cartas[0].valor + this.cartas[3].valor;
  }

  protected valorBase: number = 50;
}
