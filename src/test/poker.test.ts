import { expect } from "chai";
import { Poker } from "../combinaciones-de-poker/poker";
import { Carta } from "../Carta";

describe("Poker", () => {
  it("debería elegir un poker", () => {
    let mazo = [
      new Carta(9, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes")
    ];

    let actual = new Poker(mazo);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(7);
    expect(actual.cartas[4].valor).equal(9);
    expect(mazo.length).equal(2);
  });
});
