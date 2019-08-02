import { expect } from "chai";
import { Carta } from "../elementos-principales/carta";
import { DoblePar } from "../combinaciones-de-poker/doble-par";

describe("doble-par", () => {
  it("debería elegir un doble par", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(5, "Diamantes")
    ];

    let actual = new DoblePar(mazo);

    expect(actual.cartas.length).equal(4);
    expect(actual.cartas[0].valor).equal(7);
    expect(mazo.length).equal(3);
  });
});
