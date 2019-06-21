import { Carta } from "./carta";
import { Jugador } from "./jugador";

//we are creating a game of texas hold'em

export class Juego {
  public mazo: Array<Carta>;
  public pozo: number;
  public jugadores: Array<Jugador>;
  public turno: number;
  public mezclado: boolean;
  public manoCroupier: Array<Carta>;

  constructor() {
    this.mazo = [];
    this.pozo = 0;
    this.jugadores = [];
    this.turno = 0;
    this.mezclado = false;
    this.manoCroupier = [];
  }

  // we should create a deck of cards with this
  // texas hold'em use a spanish deck

  public crearMazo(): Array<Carta> {
    let palos = ["corazones", "diamantes", "picas", "treboles"];
    let valores = [
      { nombre: "As", valor: 14 },
      { nombre: "Rey", valor: 13 },
      { nombre: "Reina", valor: 12 },
      { nombre: "Jota", valor: 11 },
      { nombre: "Diez", valor: 10 },
      { nombre: "Nueve", valor: 9 },
      { nombre: "Ocho", valor: 8 },
      { nombre: "Siete", valor: 7 },
      { nombre: "Seis", valor: 6 },
      { nombre: "Cinco", valor: 5 },
      { nombre: "Cuatro", valor: 4 },
      { nombre: "Tres", valor: 3 },
      { nombre: "Dos", valor: 2 }
    ];

    for (let indicePalo = 0; indicePalo < palos.length; indicePalo++) {
      for (let indiceValor = 0; indiceValor < valores.length; indiceValor++) {
        let carta = new Carta();
        carta.nombre = valores[indiceValor].nombre + " de " + palos[indicePalo];
        carta.valor = valores[indiceValor].valor;
        carta.palo = palos[indicePalo];
        this.mazo.push(carta);
      }
    }
    return this.mazo;
  }

  // now we shuffle the deck
  // this should start the cicle of a round in texas hold'em

  public mezclarMazo(): Array<Carta> {
    for (let indice = 0; indice < this.mazo.length; indice++) {
      let indiceCartaCambiada = Math.round(Math.random() * this.mazo.length);
      let cartaCambiada = this.mazo[indiceCartaCambiada];
      this.mazo[indiceCartaCambiada] = this.mazo[indice];
      this.mazo[indice] = cartaCambiada;
    }
    this.mezclado = true;
    return this.mazo;
  }

  // Assign quantity of players (this game should support up to 4 players top)

  public crearJugadores(cantidad: number): Array<Jugador> {

    for (let i = 0; i < cantidad; i++) {
      let player = new Jugador();
      player.id = i
      this.jugadores.push(player);
      if (i === 4) {
        return;
      }
    }
    return this.jugadores;
  }

  // texas hold'em has various stages, we'll call them "draw stages", and "betting stages"
  // after a "draw stage" there always is a betting stage
  // first stage is dealing two cards to each player in the board
  // draw stage

  public repartirCartasJugadores(): Array<Jugador> {
    for (let i = 0; i < this.jugadores.length; i++) {
      let carta1 = this.mazo.shift();
      let carta2 = this.mazo.shift();

      this.jugadores[i].manoTotal.push(carta1);
      this.jugadores[i].manoTotal.push(carta2);
    }
    return this.jugadores;
  }

  // you bet that you have or will have the best hand comparing with the other players
  // there will be a betting function here

  // second draw stage
  // this set of cards can be used by all the players in the board
  // the flop
  // draw stage

  public flop(): Array<Carta> {
    if (this.manoCroupier.length === 0) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.slice(0, 3));
    }
    return this.manoCroupier;
  }

  // same function as above but you draw just one "public" card
  // draw stage

  public river() {
    if (this.manoCroupier.length === 3) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.shift());
    }
  }

  // draw stage
  // after the last round of bets should end the cicle of one play

  public turn() {
    if (this.manoCroupier.length === 4) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.shift());
      for (
        let indexJugador = 0;
        indexJugador < this.jugadores.length;
        indexJugador++
      ) {
        this.jugadores[indexJugador].manoTotal = this.manoCroupier.concat(
          this.jugadores[indexJugador].manoTotal
        );
      }
    }
  }

  // ending of round, this should choose a winner who gets all the bets
  // if there is a tie then the well gets divided among the players (the ones that have tied)
  // after this, the cicle resets

  public elegirManoGanadora(mano: Array<Carta>): Array<Carta> {
    mano.sort((a, b) => a.valor - b.valor);

    return manoPrueba;
  }

  // here will be a function that checks if there are players with 0 "fichas"
  // if that happens, that player gets eliminated from the game
  // when there is only one player on the board, the game finishes, he or she wins

  //ideas for betting functions

  // public apostar(apuesta: number) {
  //   this.pozo = this.pozo + apuesta;
  //   this.fichasJugador = this.fichasJugador - apuesta;
  // }

  // public rondaApuestas() {
  //   for (let i = 0; i < this.cantidadJugadores.length; i++) {}
  // }
}

let prueba = new Juego();

prueba.crearMazo();
prueba.mezclarMazo();
let manoPrueba = prueba.mazo.splice(0, 7);
console.log(prueba.elegirManoGanadora(manoPrueba));
// console.log(prueba.crearJugadores(3));
// prueba.repartirCartasJugadores();
// console.log(prueba.jugadores)
// prueba.flop();
// prueba.river();
// prueba.turn();
// console.log(prueba.jugadores);
// console.log(prueba.jugadores[0].manoTotal[0])
