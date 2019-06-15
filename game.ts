import { Carta } from "./Carta";

export class Juego {
  public mazo: Array<Carta>;
  public pozo: number;
  public jugadores: Array<{ id: number, nombre: string, fichas: number, manoInicial: Array<Carta>, manoFinal: Array<Carta> }>;
  public turno: number;
  public mezclado: boolean;
  public manoCroupier: Array<Carta>

  constructor() {
    this.mazo = this.crearMazo();
    this.pozo = 0;
    this.jugadores = [];
    this.turno = 0;
    this.mezclado = false;
    this.manoCroupier = []
  }

  public crearMazo(): Array<Carta> {
    let palos = ["corazones", "diamantes", "picas", "treboles"];
    let valores = [
      "As",
      "Rey",
      "Reina",
      "Jota",
      "diez",
      "nueve",
      "ocho",
      "siete",
      "seis",
      "cinco",
      "cuatro",
      "tres",
      "dos"
    ];
    let cartas = [];

    for (let indicePalo = 0; indicePalo < palos.length; indicePalo++) {
      for (let indiceValor = 0; indiceValor < valores.length; indiceValor++) {
        const carta = new Carta();
        carta.nombre = valores[indiceValor] + " de " + palos[indicePalo];
        carta.valor = valores[indiceValor];
        carta.palo = palos[indicePalo];
        cartas.push(carta);
      }
    }
    return cartas;
  }

  public mezclarMazo(): Array<Carta> {
    for (let indice = 0; indice < this.mazo.length; indice++) {
      let indiceCartaCambiada = Math.round(Math.random() * this.mazo.length);
      let cartaCambiada = this.mazo[indiceCartaCambiada];
      this.mazo[indiceCartaCambiada] = this.mazo[indice];
      this.mazo[indice] = cartaCambiada;
    }

    this.mezclado = true;
    return this.mazo
  }

  public crearJugadores(cantidad: number): Array<{ id: number, nombre: string, fichas: number, manoInicial: Array<Carta>, manoFinal: Array<Carta> }> {
    for (let i = 0; i < cantidad; i++) {
      this.jugadores.push({
        id: i,
        nombre: "",
        fichas: 100,
        manoInicial: [],
        manoFinal: []
      });
      if (i === 3) {
        return
      }
    }

    return this.jugadores
  }

  public repartirCartasJugadores(cantidadJugadores: number) {
    let mazoMezclado = this.mazo;
    let jugadores = this.crearJugadores(cantidadJugadores)

    for (let i = 0; i < cantidadJugadores; i++) {
      jugadores[i].manoInicial = mazoMezclado.splice(0, 2);
    }
    return this.mazo
  }

  public flop() {
    if (this.manoCroupier.length === 0) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.slice(0, 3))
    }
  }

  public river() {
    if (this.manoCroupier.length === 3) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.shift())
    } else {
      throw new Error();
    }
  }

  public turn() {
    if (this.manoCroupier.length === 4) {
      this.manoCroupier = this.manoCroupier.concat(this.mazo.shift())
    }
  }

  // public apostar(apuesta: number) {
  //   this.pozo = this.pozo + apuesta;
  //   this.fichasJugador = this.fichasJugador - apuesta;
  // }

  // public rondaApuestas() {
  //   for (let i = 0; i < this.cantidadJugadores.length; i++) {}
  // }
}

let prueba = new Juego();

//console.log(prueba.repartirCartasJugadores(2));
// console.log(prueba.apostar(51));
// console.log(prueba.crearMazo());
// console.log(prueba.mezclarMazo());
