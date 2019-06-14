class Board {
  public mazo: Array<object>;
  public pozo: number;
  public apuesta: number;
  public turno: number;
  public manoJugadores: Array<Array<object>>;

  constructor() {
    this.mazo = this.crearMazo();
    this.pozo = 0;
    this.apuesta = 0;
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

  public repartirCartasJugadores(cantidad: number) {
    let mazoMezclado = this.mezclarMazo();

    for (let i = 0; i < cantidad; i++) {
      this.manoJugadores.push([mazoMezclado.shift(), mazoMezclado.shift()]);
    }
    return this.manoJugadores;
  }
}

let prueba = new Board();

console.log(prueba.repartirCartasJugadores(2));
