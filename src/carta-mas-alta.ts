import { Carta } from "src/Carta";
import { Combinacion } from "./combinacion";

export class CartaMasAlta extends Combinacion {
  protected valorBase: number = 0;

  public get valor(): number {
    let valor = 0;
    let base = 100000;
    this.cartas.forEach((carta, index) => {
      valor = valor + carta.valor * base;
      base = base / 10;
    });

    return valor;
  }

  public constructor(mano: Carta[], cantidad: number) {
    super();
    this.cartas = mano.splice(0, cantidad);
  }
}
