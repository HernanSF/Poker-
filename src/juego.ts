import { Carta } from "./elementos-principales/carta";
import { Jugador } from "./elementos-principales/jugador";
import { Mazo } from "./elementos-principales/mazo";
import { Reglas } from "./elementos-principales/reglas";

export class Juego {
  public mazo: Mazo;
  public pozo: number;
  public jugadores: Jugador[];
  public turno: number;
  public manoCroupier: Carta[];
  public juegoTerminado: boolean = false;
  public ganadores: Jugador[];

  constructor() {
    this.mazo = new Mazo();
    this.pozo = 0;
    this.jugadores = [];
    this.turno = 0;
    this.manoCroupier = [];
  }

  crearJugadores(cantidadJugadores: number) {
    for (let i = 0; i < cantidadJugadores; i++) {
      const player = new Jugador();
      player.id = i;
      this.jugadores.push(player);
      if (i === 4) {
        return;
      }
    }
  }

  // deal 2 cards to players

  public repartirCartasJugadores(): Jugador[] {
    if (this.mazo.cartas.length === 0) {
      throw new Error("No se pueden repartir cartas a los jugadores. Falta crear el mazo primero.");
    }

    for (const jugador of this.jugadores) {
      const carta1 = this.mazo.cartas.shift();
      const carta2 = this.mazo.cartas.shift();

      jugador.mano.push(carta1);
      jugador.mano.push(carta2);
    }
    return this.jugadores;
  }

  public flop(): Carta[] {
    if (this.manoCroupier.length === 0) {
      this.manoCroupier = this.mazo.cartas.splice(0, 3);
    }
    return this.manoCroupier;
  }

  // second draw stage

  public river() {
    if (this.manoCroupier.length === 3) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.cartas.shift());
    } else {
      throw new Error();
    }
  }

  // third draw stage

  public turn() {
    if (this.manoCroupier.length === 4) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.cartas.shift());
      for (let indexJugador = 0; indexJugador < this.jugadores.length; indexJugador++) {
        this.jugadores[indexJugador].mano = this.manoCroupier.concat(this.jugadores[indexJugador].mano);
      }
    }
  }

  public encontrarGanador(jugadores: Jugador[]): Jugador[] {
    jugadores.sort((a, b) => b.combinacion.ranking - a.combinacion.ranking);
    let ganadores = jugadores.filter((jugador) => jugadores[0].combinacion.ranking === jugador.combinacion.ranking);

    if (ganadores.length === 1) {
      return ganadores;
    } else {
      let index = 0;
      let termine = false;
      while (!termine && ganadores.length !== 1) {
        ganadores.sort(
          (jugadorA, jugadorB) => jugadorB.combinacion.cartas[index].valor - jugadorA.combinacion.cartas[index].valor
        );
        ganadores = ganadores.filter(
          (jugador) => ganadores[0].combinacion.cartas[index].valor === jugador.combinacion.cartas[index].valor
        );
        index++;
        termine = index === 5;
      }

      return ganadores;
    }
  }

  finalizarPartida() {
    this.mejorCombinacionJugadores();
    this.ganadores = this.encontrarGanador(this.jugadores);
    this.juegoTerminado = true;
  }

  private mejorCombinacionJugadores() {
    for (const jugador of this.jugadores) {
      const reglas = new Reglas();
      const combinacionJugador = reglas.buscarMejorCombinacion(jugador.mano);
      jugador.combinacion = combinacionJugador;
    }
  }
}
