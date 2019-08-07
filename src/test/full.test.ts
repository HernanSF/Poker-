import { expect } from "chai";
import { Full } from "../combinaciones-de-poker/full";
import { Carta } from "../elementos-principales/carta";

describe("Full", () => {
  it("debería elegir un full", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(5, "Diamantes")
    ];

    let full = new Full(mazo);

    expect(full.cartas.length).equal(5);
    expect(full.cartas[0].valor).equal(7);
    expect(mazo.length).equal(2);
  });
});
