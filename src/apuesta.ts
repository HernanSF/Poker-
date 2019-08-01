import { Jugador } from "./jugador";

export class Apuesta {
  public jugador: Jugador;

  constructor(player: Jugador) {
    this.jugador = player;
  }
}
