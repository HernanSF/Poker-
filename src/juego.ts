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

      jugador.manoTotal.push(carta1);
      jugador.manoTotal.push(carta2);
    }
    return this.jugadores;
  }

  // there will be a betting function here

  // draw stage

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
        this.jugadores[indexJugador].manoTotal = this.manoCroupier.concat(this.jugadores[indexJugador].manoTotal);
      }
    }
  }

  public encontrarGanador() {
    for (const jugador of this.jugadores) {
      let reglas = new Reglas();
      jugador.manoFinal = reglas.verResultados(jugador.manoTotal).cartas;
      let diferencia = jugador.manoTotal.filter((x) => !jugador.manoFinal.includes(x));
      diferencia.sort((a, b) => b.valor - a.valor);
      jugador.puntaje.push(reglas.verResultados(jugador.manoTotal).puntajeBase);
      jugador.puntaje.push(reglas.verResultados(jugador.manoTotal).puntajeIgualado);
      if (jugador.manoFinal.length !== 5) {
        jugador.manoFinal = jugador.manoFinal.concat(diferencia.slice(0, 5 - jugador.manoFinal.length));
        let cartasExtra = diferencia.slice(0, 5 - jugador.manoFinal.length);
        let total = 0;
        for (let i in cartasExtra) {
          total += cartasExtra[i].valor;
        }
        jugador.puntaje.push(total);
      }
    }
  }
  //ordenar los jugadores por aquellos que tengan el mayor puntaje de base
  //filtrar los que tengan el mismo puntaje que el primero
  //si quedaron dos o mas jugadores repetir proceso pero ordenando por puntaje igualado
  //filtrar los que tengan el mismo puntaje que el primero
  //repetir proceso con puntaje de carta mas alta
  //filtrar por ultima vez
  //jugadores que quedan son ganadores
}
