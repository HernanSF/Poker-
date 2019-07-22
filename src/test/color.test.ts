import { expect } from "chai";
import { Carta } from "../carta";
import { Color } from "../combinaciones-de-poker/color";

describe.only("color", () => {
  //color son cinco cartas del mismo palo, si hay mas, se eligen las de mayor valor
  it("debería  elegir una mano de color", () => {
    let mazo = [
      new Carta(11, "Diamantes"),
      new Carta(10, "Picas"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Corazones"),
      new Carta(4, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(2, "Diamantes")
    ];

    let actual = new Color(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(11);
    expect(actual.cartas[1].valor).equal(8);
    expect(actual.cartas[2].valor).equal(4);
    expect(actual.cartas[3].valor).equal(3);
    expect(actual.cartas[4].valor).equal(2);

    mazo = [
      new Carta(11, "Diamantes"),
      new Carta(10, "Picas"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(4, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(2, "Diamantes")
    ];

    actual = new Color(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(11);
    expect(actual.cartas[1].valor).equal(8);
    expect(actual.cartas[2].valor).equal(7);
    expect(actual.cartas[3].valor).equal(4);
    expect(actual.cartas[4].valor).equal(3);
  });
});
