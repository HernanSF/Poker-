class Board {
  private mazo: Array<object>;
  private pozo: number;
  private apuesta: number;
  private turno: number;

  constructor() {
    this.mazo = this.crearMazo();
    this.pozo = 0;
    this.apuesta = 0;
    this.turno = 0;
  }

  private crearMazo() {
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

  private mezclarMazo (){
    for (let indice=0; indice<this.mazo.length; indice++){
      let indiceCartaCambiada = Math.floor(Math.random() * this.mazo.length);
      let cartaCambiada = this.mazo[indiceCartaCambiada];
      this.mazo[indiceCartaCambiada] = this.mazo[indice];
      this.mazo[indice] = cartaCambiada;

    }
  }
}
