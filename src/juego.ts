import { Carta } from "./carta";
import { Jugador } from "./jugador";
import { Mazo } from "./mazo";

export class Juego {
  public mazo: Mazo;
  public pozo: number;
  public jugadores: Jugador[];
  public turno: number;
  public manoCroupier: Carta[];

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
  // texas hold'em has various stages, we'll call them "draw stages", and "betting stages"
  // after a "draw stage" there always is a betting stage
  // first stage is dealing two cards to each player in the board
  // draw stage

  public repartirCartasJugadores(): Jugador[] {
    if (this.mazo.cartas.length === 0) {
      throw new Error("No se pueden repartir cartas a los jugadores. Falta crear el mazo primero.");
    }

    for (const jugador of this.jugadores) {
      const carta1 = this.mazo.cartas.shift();
      const carta2 = this.mazo.cartas.shift();

      jugador.manoTotal.push(carta1);
      jugador.manoTotal.push(carta2);
    }
    return this.jugadores;
  }

  // you bet that you have or will have the best hand comparing with the other players
  // there will be a betting function here

  public rondaApuestas() {
    function apostar(name: string, amount: number) {}
    for (const jugador of this.jugadores) {
      let apuesta = jugador.apuesta(name, 0);
    }
  }
  // second draw stage
  // this set of cards can be used by all the players in the board
  // the flop
  // draw stage

  public flop(): Carta[] {
    if (this.manoCroupier.length === 0) {
      this.manoCroupier = this.mazo.cartas.slice(0, 3);
    }
    return this.manoCroupier;
  }

  // same function as above but you draw just one "public" card
  // draw stage

  public river() {
    if (this.manoCroupier.length === 3) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.cartas.shift());
    } else {
      throw new Error();
    }
  }

  // draw stage
  // after the last round of bets should end the cicle of one play

  public turn() {
    if (this.manoCroupier.length === 4) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.cartas.shift());
      for (let indexJugador = 0; indexJugador < this.jugadores.length; indexJugador++) {
        this.jugadores[indexJugador].manoTotal = this.manoCroupier.concat(this.jugadores[indexJugador].manoTotal);
      }
    }
  }

  // ending of round, this should choose a winner who gets all the bets
  // if there is a tie then the well gets divided among the players (the ones that have tied)
  // after this, the cicle resets

  // public elegirManoGanadora(mano: Array<Carta>): Array<Carta> {
  //   mano.sort((a, b) => a.valor - b.valor);

  // }

  // here will be a function that checks if there are players with 0 "fichas"
  // if that happens, that player gets eliminated from the game
  // when there is only one player on the board, the game finishes, he or she wins

  // ideas for betting functions

  // public apostar(...apuestas: Array<number>) {
  // let apuestasActuales = apuestas
  //  apuestas.forEach(element =>
  //   this.pozo = this.pozo + element)
  // }
}
