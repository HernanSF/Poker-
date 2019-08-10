import { Carta } from "../elementos-principales/carta";
import { Combinacion } from "../elementos-principales/combinacion";
import { PALOS } from "../elementos-principales/constantes";

export class Color extends Combinacion {
  public ranking: number = 5;

  public constructor(mano: Carta[]) {
    super(mano);

    const paloColor = [PALOS.DIAMANTES, PALOS.TREBOLES, PALOS.PICAS, PALOS.CORAZONES].find(
      (palo) => mano.filter((carta) => carta.palo === palo).length >= 5 // Encontrá el primer palo que cumpla que haya más de cinco cartas de ese palo
    );

    if (paloColor) {
      this.cartas = mano.filter((carta) => carta.palo === paloColor).splice(0, 5);
    }
  }
}
