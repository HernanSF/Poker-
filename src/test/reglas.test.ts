import { expect } from "chai";
import { Carta } from "../elementos-principales/carta";
import { Reglas } from "../elementos-principales/reglas";

describe("Reglas", () => {
  it("debería elegir escalera de color", () => {
    let mazo = [
      new Carta(10, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(1, "Diamantes")
    ];

    let reglas = new Reglas();
    let actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual).to.exist;
    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(10);
    expect(actual.cartas[1].valor).equal(9);
    expect(actual.cartas[2].valor).equal(8);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.cartas[4].valor).equal(6);
    expect(actual.ranking).equal(8);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(14, "Treboles"),
      new Carta(12, "Treboles"),
      new Carta(13, "Treboles"),
      new Carta(8, "Treboles"),
      new Carta(8, "Treboles"),
      new Carta(11, "Treboles"),
      new Carta(10, "Treboles")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual).to.exist;
    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(14);
    expect(actual.cartas[1].valor).equal(13);
    expect(actual.cartas[2].valor).equal(12);
    expect(actual.cartas[3].valor).equal(11);
    expect(actual.cartas[4].valor).equal(10);
    expect(actual.ranking).equal(8);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(10, "Picas"),
      new Carta(5, "Picas"),
      new Carta(4, "Picas"),
      new Carta(8, "Picas"),
      new Carta(3, "Picas"),
      new Carta(2, "Picas"),
      new Carta(1, "Picas"),
      new Carta(14, "Picas")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual).to.exist;
    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(5);
    expect(actual.cartas[1].valor).equal(4);
    expect(actual.cartas[2].valor).equal(3);
    expect(actual.cartas[3].valor).equal(2);
    expect(actual.cartas[4].valor).equal(1);
    expect(actual.ranking).equal(8);
    expect(mazo.length).equal(8);
  });

  it("debería elegir Poker", () => {
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
    let actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[1].valor).equal(7);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.cartas[4].valor).equal(9);

    expect(actual.ranking).equal(7);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(6, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(10, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[1].valor).equal(7);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.cartas[4].valor).equal(10);

    expect(actual.ranking).equal(7);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(7, "Diamantes"),
      new Carta(14, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(7, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[1].valor).equal(7);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.cartas[4].valor).equal(14);

    expect(actual.ranking).equal(7);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(12, "Diamantes"),
      new Carta(12, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(12, "Diamantes"),
      new Carta(12, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(12);
    expect(actual.cartas[1].valor).equal(12);
    expect(actual.cartas[2].valor).equal(12);
    expect(actual.cartas[3].valor).equal(12);
    expect(actual.cartas[4].valor).equal(8);

    expect(actual.ranking).equal(7);
    expect(mazo.length).equal(7);
  });

  it("debería elegir Full", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(3, "Diamantes")
    ];

    let reglas = new Reglas();
    let actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[1].valor).equal(7);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(6);
    expect(actual.cartas[4].valor).equal(6);

    expect(actual.ranking).equal(6);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(6, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Picas"),
      new Carta(7, "Picas"),
      new Carta(6, "Picas"),
      new Carta(10, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[1].valor).equal(7);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(6);
    expect(actual.cartas[4].valor).equal(6);

    expect(actual.ranking).equal(6);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(14, "Diamantes"),
      new Carta(14, "Diamantes"),
      new Carta(11, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(11, "Diamantes"),
      new Carta(11, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(1, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(11);
    expect(actual.cartas[1].valor).equal(11);
    expect(actual.cartas[2].valor).equal(11);
    expect(actual.cartas[3].valor).equal(14);
    expect(actual.cartas[4].valor).equal(14);

    expect(actual.ranking).equal(6);
    expect(mazo.length).equal(9);

    mazo = [
      new Carta(12, "Diamantes"),
      new Carta(12, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(12, "Diamantes"),
      new Carta(7, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(12);
    expect(actual.cartas[1].valor).equal(12);
    expect(actual.cartas[2].valor).equal(12);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.cartas[4].valor).equal(7);

    expect(actual.ranking).equal(6);
    expect(mazo.length).equal(7);
  });

  it("debería elegir Color", () => {
    let mazo = [
      new Carta(3, "Diamantes"),
      new Carta(4, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(6, "Picas"),
      new Carta(9, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(3, "Picas")
    ];

    let reglas = new Reglas();
    let actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(9);
    expect(actual.cartas[1].valor).equal(5);
    expect(actual.cartas[2].valor).equal(4);
    expect(actual.cartas[3].valor).equal(3);
    expect(actual.cartas[4].valor).equal(2);

    expect(actual.ranking).equal(5);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(6, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Picas"),
      new Carta(7, "Picas"),
      new Carta(6, "Picas"),
      new Carta(10, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[1].valor).equal(7);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(6);
    expect(actual.cartas[4].valor).equal(6);

    expect(actual.ranking).equal(6);
    expect(mazo.length).equal(7);

    mazo = [
      new Carta(14, "Diamantes"),
      new Carta(14, "Diamantes"),
      new Carta(11, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(11, "Diamantes"),
      new Carta(11, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(1, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(11);
    expect(actual.cartas[1].valor).equal(11);
    expect(actual.cartas[2].valor).equal(11);
    expect(actual.cartas[3].valor).equal(14);
    expect(actual.cartas[4].valor).equal(14);

    expect(actual.ranking).equal(6);
    expect(mazo.length).equal(9);

    mazo = [
      new Carta(12, "Diamantes"),
      new Carta(12, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(12, "Diamantes"),
      new Carta(7, "Diamantes")
    ];

    reglas = new Reglas();
    actual = reglas.buscarMejorCombinacion(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(12);
    expect(actual.cartas[1].valor).equal(12);
    expect(actual.cartas[2].valor).equal(12);
    expect(actual.cartas[3].valor).equal(7);
    expect(actual.cartas[4].valor).equal(7);

    expect(actual.ranking).equal(6);
    expect(mazo.length).equal(7);
  });
});
