class Juego {
  public mazo: Array<object>;
  public pozo: number;
  public jugadores: Array<object>;
  public turno: number;
  public manoJugadores: Array<Array<object>>;

  constructor() {
    this.mazo = this.crearMazo();
    this.pozo = 0;
    this.jugadores = [];
    this.turno = 0;
    this.manoJugadores = [];
  }

  public crearMazo() {
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
        cartas.push({
          nombre: valores[indiceValor] + " de " + palos[indicePalo],
          valor: valores[indiceValor],
          palo: palos[indicePalo]
        });
      }
    }
    return cartas;
  }

  public mezclarMazo() {
    for (let indice = 0; indice < this.mazo.length; indice++) {
      let indiceCartaCambiada = Math.round(Math.random() * this.mazo.length);
      let cartaCambiada = this.mazo[indiceCartaCambiada];
      this.mazo[indiceCartaCambiada] = this.mazo[indice];
      this.mazo[indice] = cartaCambiada;
    }
    return this.mazo;
  }

  public crearJugadores(cantidad: number) {
    for (let i = 0; i < cantidad; i++) {
      this.jugadores.push({
        id: i,
        nombre: "",
        fichas: 100,
        manoInicial: [],
        manoFinal: []
      });
      if (i === 3) {
        return;
      }
    }
    return this.jugadores;
  }

  public repartirCartasJugadores(cantidad: number) {
    let mazoMezclado = this.mezclarMazo();
    let jugadores = this.crearJugadores(cantidad);

    for (let i = 0; i < cantidad; i++) {
      jugadores[i].manoInicial = [mazoMezclado.shift(), mazoMezclado.shift()];
    }
    return jugadores;
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

// console.log(prueba.repartirCartasJugadores(2));
// console.log(prueba.apostar(51));
console.log(prueba.crearMazo());
