class Board {
  constructor() {
    this.flop = [];
    this.turn = {};
    this.river = {};
    // revisar
    this.pozo = 0;
    this.apuesta = 0;
    this.turno = 0;
    this.mazo = [];
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
    for (let indicePalo = 0; indiceValor < palos.length; indicePalo++) {
      for (let indiceValor = 0; indiceValor < valores.length; indiceValor++) {
        this.mazo.push({
          nombre: valores[indiceValor] + "de " + palos[indicePalo]
        });
      }
    }
    return this.mazo
  }
   

}
