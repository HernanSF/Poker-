class Board {
  constructor() {
    let mazo = this.crearMazo();
    this.flop = [];
    this.turn = {};
    this.river = {};
    this.pozo = 0;
    this.apuesta = 0;
    this.turno = 0;
    this.mejorMano = [];
    this.jugadorFichas = 100;
  }

  crearMazo() {
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
          nombre: valores[indiceValor] + " de " + palos[indicePalo]
        });
      }
    }
    return cartas;
  }
}
