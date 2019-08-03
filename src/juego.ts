import { Carta } from "./elementos-principales/carta";
import { Jugador } from "./elementos-principales/jugador";
import { Mazo } from "./elementos-principales/mazo";
import { Reglas } from "./elementos-principales/reglas";
import { CartaMasAlta } from "./combinaciones-de-poker/carta-mas-alta";
import { Combinacion } from "./elementos-principales/combinacion";

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

      jugador.mano.push(carta1);
      jugador.mano.push(carta2);
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
        this.jugadores[indexJugador].mano = this.manoCroupier.concat(this.jugadores[indexJugador].mano);
      }
    }
  }

  public encontrarGanador(jugadores: Jugador[]): Jugador[] {
    jugadores.sort((a, b) => b.combinacion.ranking - a.combinacion.ranking);
    let posiblesGanadores = jugadores.filter(
      (jugador) => jugadores[0].combinacion.ranking === jugador.combinacion.ranking
    );

    if (posiblesGanadores.length === 1) {
     return posiblesGanadores;
    } else {
      let index = 0;
      let termine = false;
      while (!termine && posiblesGanadores.length !== 1) {
        posiblesGanadores.sort(
          (jugadorA, jugadorB) => jugadorB.combinacion.cartas[index].valor - jugadorA.combinacion.cartas[index].valor
        );
        posiblesGanadores = posiblesGanadores.filter(
          (jugador) => posiblesGanadores[0].combinacion.cartas[index].valor === jugador.combinacion.cartas[index].valor
        );
        index++;
        termine = index === 5;
      }

      return posiblesGanadores;
    }

    // Ya cada jugador tiene su mejor combinación, ahora hay que ordenar jugadores por combinacion y de ahí buscar los que son iguales. Los iguales comparar sus cartas y decidir ganador

    // if (typeof combinacionJugador === typeof otraCombinacion) {
    //   while(!termine) {
    //     const carta = combinacionJugador.cartas[index];
    //     const otraCarta = otraCombinacion.cartas[index];

    //     if (carta.valor > otraCarta.valor) {

    //     }

    //   }
    // }
    // combinacionJugador.cartas;

    // 1.4897;

    // // 1400 vs 1300

    // jugador.manoFinal = combinacionJugador.cartas;

    // diferencia.sort((a, b) => b.valor - a.valor);
    // jugador.puntaje.push(reglas.buscarMejorCombinacion(jugador.manoTotal).puntajeBase);
    // jugador.puntaje.push(reglas.buscarMejorCombinacion(jugador.manoTotal).puntajeIgualado);
    // if (jugador.manoFinal.length !== 5) {
    //   jugador.manoFinal = jugador.manoFinal.concat(diferencia.slice(0, 5 - jugador.manoFinal.length));
    //   let longitud = diferencia.slice(0, 5 - jugador.manoFinal.length).length;
    //   let suma = 0;
    //   while (--longitud || longitud !== 0) {
    //     suma += diferencia.slice(0, 5 - jugador.manoFinal.length)[longitud].valor;
    //   }
    //   jugador.puntaje.push(suma);
    // }
  }

  private mejorCombinacionJugadores() {
    for (const jugador of this.jugadores) {
      const reglas = new Reglas();
      const combinacionJugador = reglas.buscarMejorCombinacion(jugador.mano);
      // const diferencia = jugador.mano.filter((x) => !jugador.combinacion.includes(x));
      // // const cartaMasAlta = new CartaMasAlta(diferencia, 5 - combinacionJugador.cartas.length);
      jugador.combinacion = combinacionJugador;
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
