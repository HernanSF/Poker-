import { EscaleraColor } from "./combinaciones-de-poker/escalera-color";
import { Poker } from "./combinaciones-de-poker/poker";
import { Full } from "./combinaciones-de-poker/full";
import { Color } from "./combinaciones-de-poker/color";
import { Escalera } from "./combinaciones-de-poker/escalera";
import { Pierna } from "./combinaciones-de-poker/pierna";
import { DoblePar } from "./combinaciones-de-poker/doble-par";
import { Par } from "./combinaciones-de-poker/par";
import { CartaMasAlta } from "./combinaciones-de-poker/carta-mas-alta";
import { Carta } from "./Carta";
import { Combinacion } from "./combinacion";

export class Reglas {
  
  public verResultados(mano: Carta[]): Combinacion {
    const manoClonada = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const escColor = new EscaleraColor(manoClonada);
    const manoClonada1 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const poker = new Poker(manoClonada1);
    const manoClonada2 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const full = new Full(manoClonada2);
    const manoClonada3 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const color = new Color(manoClonada3);
    const manoClonada4 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const esc = new Escalera(manoClonada4);
    const manoClonada5 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const pierna = new Pierna(manoClonada5);
    const manoClonada6 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const doblePar = new DoblePar(manoClonada6);
    const manoClonada7 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const par = new Par(manoClonada7);
    const manoClonada8 = mano.slice(0).sort((a, b) => b.valor - a.valor);
    const cartaAlta = new CartaMasAlta(manoClonada8, 5);

    const posiblesManos = [escColor, poker, full, color, esc, pierna, doblePar, par, cartaAlta];
    const manoEncontrada = posiblesManos.find((combinacion) => combinacion.cartas.length > 0);
    return manoEncontrada;
  }
}
