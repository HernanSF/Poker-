import { CartaMasAlta } from "src/carta-mas-alta";
import { Par } from "src/par";
import { Carta } from "./Carta";
import { Combinacion } from "./combinacion";
import { Escalera } from "./escalera";

export class Reglas {
  public verResultados(mano: Carta[]): Combinacion {
    // ESCALERA COLOR: Si tengo, el resto es undefined
    // POKER: Si tengo, el resto es undefined
    // FULL: Si tengo, el resto es undefined
    // COLOR:  Si tengo, el resto es undefined
    // ESCALERA: Si tengo, el resto es undefined
    // PIERNA: Si tengo, el resto es undefined
    // DOBLE PAR: Si tengo, el resto es undefined
    // PAR: Si tengo, el resto es undefined
    // CARTA MAS ALTA

    // Tengo que clonar la mano porque cada new Combinacion() modificar el vector mano
    const manoClonada = mano.slice(0);
    const reglas = [(manoJugador) => new Escalera(manoJugador), (manoJugador) => new Par(manoJugador)];

    // Busco la regla que me de una combinación con cartas.
    const reglaEncontrada = reglas.find((regla) => regla(manoClonada).cartas.length > 0);
    const mejorCombinacion = reglaEncontrada(mano);

    const manoMasAlta = new CartaMasAlta(manoClonada, 5 - mejorCombinacion.cartas.length);

    return manoMasAlta;
  }
}
