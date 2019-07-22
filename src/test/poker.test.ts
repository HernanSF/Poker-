import { expect } from "chai";
import { Poker } from "../combinaciones-de-poker/poker";
import { Carta } from "../Carta";

describe("Poker", () => {
  it("debería elegir un poker", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(9, "Diamantes")
    ];

    let poker = new Poker(mazo);

    expect(poker.cartas.length).equal(4);
    expect(poker.cartas[0].valor).equal(7);
    expect(mazo.length).equal(3);
  });
});
