import { expect } from "chai";
import { Carta } from "../carta";
import { DoblePar } from "../doble-par";

describe("doble-par", () => {
  //un full son tres cartas del mismo valor y dos de otro valor
  it("debería crear un doble-par", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(9, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(5, "Diamantes")
    ];

    let doblePar = new DoblePar(mazo);

    expect(doblePar.cartas.length).equal(4);
    expect(doblePar.cartas[0].valor).equal(7);
    expect(mazo.length).equal(3);
  });
});
