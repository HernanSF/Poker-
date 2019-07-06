import { expect } from "chai";
import { Par } from "../par";
import { Carta } from "../Carta";

describe("Par", () => {
  it("debería crear un par", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(9, "Diamantes")
    ];

    let par = new Par(mazo);

    expect(par.cartas.length).equal(2);
    expect(par.cartas[0].valor).equal(7);
    expect(mazo.length).equal(5);

    par = new Par(mazo);
    expect(par.cartas.length).equal(2);
    expect(par.cartas[0].valor).equal(3);
    expect(mazo.length).equal(3);
  });
});
