import { CartaMasAlta } from "../combinaciones-de-poker/carta-mas-alta";
import { Color } from "../combinaciones-de-poker/color";
import { DoblePar } from "../combinaciones-de-poker/doble-par";
import { Escalera } from "../combinaciones-de-poker/escalera";
import { EscaleraColor } from "../combinaciones-de-poker/escalera-color";
import { Full } from "../combinaciones-de-poker/full";
import { Par } from "../combinaciones-de-poker/par";
import { Pierna } from "../combinaciones-de-poker/pierna";
import { Poker } from "../combinaciones-de-poker/poker";
import { Carta } from "./carta";
import { Combinacion } from "./combinacion";

export class Reglas {
  public buscarMejorCombinacion(mano: Carta[]): Combinacion {
    const reglas = [
      (unaMano) => new EscaleraColor(unaMano),
      (unaMano) => new Poker(unaMano),
      (unaMano) => new Full(unaMano),
      (unaMano) => new Color(unaMano),
      (unaMano) => new Escalera(unaMano),
      (unaMano) => new Pierna(unaMano),
      (unaMano) => new DoblePar(unaMano),
      (unaMano) => new Par(unaMano),
      (unaMano) => new CartaMasAlta(unaMano, 5)
    ];

    let mejorCombinacion: Combinacion;
    let termine = false;
    let index = 0;
    while (!mejorCombinacion && !termine) {
      const manoClonada = mano.slice(0);
      const regla = reglas[index];
      const combinacion = regla(manoClonada);

      if (combinacion.cartas.length > 0) {
        mejorCombinacion = combinacion;
      }

      termine = index > reglas.length - 1;
      index++;
    }

    return mejorCombinacion;
  }
}
