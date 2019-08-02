import { Carta } from "./carta";

export class Mazo {
  public cartas: Carta[];

  constructor() {
    this.cartas = [];
    const palos = ["corazones", "diamantes", "picas", "treboles"];
    const valores = [
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
        const carta = new Carta(valores[indiceValor].valor, palos[indicePalo]);
        this.cartas.push(carta);
      }
    }
    for (let indice = 0; indice < this.cartas.length; indice++) {
      const indiceCartaCambiada = Math.floor(Math.random() * this.cartas.length);
      const cartaCambiada = this.cartas[indiceCartaCambiada];
      this.cartas[indiceCartaCambiada] = this.cartas[indice];
      this.cartas[indice] = cartaCambiada;
    }
  }
}
