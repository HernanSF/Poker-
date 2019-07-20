import { expect } from "chai";
import { Full } from "../full";
import { Carta } from "../Carta";

describe("Full", () => {
  //un full son tres cartas del mismo valor y dos de otro valor
  it("debería crear un full", () => {
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
