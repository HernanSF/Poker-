import { expect } from "chai";
import { Pierna } from "../combinaciones-de-poker/pierna";
import { Carta } from "../elementos-principales/carta";

describe("Pierna", () => {
  it("debería crear una pierna", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes")
    ];

    let pierna = new Pierna(mazo);

    expect(pierna.cartas.length).equal(3);
    expect(pierna.cartas[0].valor).equal(7);
    expect(mazo.length).equal(4);
  });
});
