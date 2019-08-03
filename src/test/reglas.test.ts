import { expect } from "chai";
import { Carta } from "../elementos-principales/carta";
import { Reglas } from "../elementos-principales/reglas";

describe("Reglas", () => {
  it("debería elegir Poker", () => {
    const mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(9, "Diamantes")
    ];

    const reglas = new Reglas();
    const actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[1].valor).equal(7);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.ranking).equal(7);
    expect(mazo.length).equal(7);
  });

  it("debería elegir otra cosa", () => {
    let mazo = [
      new Carta(10, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(1, "Diamantes")
    ];

    const reglas = new Reglas();
    const actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual).to.exist;
    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(10);
    expect(actual.cartas[1].valor).equal(9);
    expect(actual.cartas[2].valor).equal(8);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.cartas[4].valor).equal(6);
    expect(actual.ranking).equal(8);
    expect(mazo.length).equal(7);
  });
});
