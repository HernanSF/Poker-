import { expect } from "chai";
import { Carta } from "../elementos-principales/carta";
import { Reglas } from "../elementos-principales/reglas";

describe("Reglas", () => {
  it("debería elegir la mejor mano", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(9, "Diamantes")
    ];

    let reglas = new Reglas();

    expect(reglas.verResultados(mazo).cartas.length).equal(4);
    expect(reglas.verResultados(mazo).cartas[0].valor).equal(7);
    expect(reglas.verResultados(mazo).cartas[1].valor).equal(7);
    expect(reglas.verResultados(mazo).cartas[2].valor).equal(7);
    expect(reglas.verResultados(mazo).cartas[3].valor).equal(7);
    expect(reglas.verResultados(mazo).puntajeBase).equal(7);
    expect(reglas.verResultados(mazo).puntajeIgualado).equal(7);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(10, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(1, "Diamantes")
    ];

    reglas = new Reglas();

    expect(reglas.verResultados(mazo)).to.exist;
    expect(reglas.verResultados(mazo).cartas.length).equal(5);
    expect(reglas.verResultados(mazo).cartas[0].valor).equal(10);
    expect(reglas.verResultados(mazo).cartas[1].valor).equal(9);
    expect(reglas.verResultados(mazo).cartas[2].valor).equal(8);
    expect(reglas.verResultados(mazo).cartas[3].valor).equal(7);
    expect(reglas.verResultados(mazo).cartas[4].valor).equal(6);
    expect(reglas.verResultados(mazo).puntajeBase).equal(8);
    expect(reglas.verResultados(mazo).puntajeIgualado).equal(10);
    expect(mazo.length).equal(7);
  });
});
