import { expect } from "chai";
import { Par } from "../combinaciones-de-poker/par";
import { Carta } from "../carta";

describe("Par", () => {
  it("debería elegir un par", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(9, "Diamantes")
    ];

    let par = new Par(mazo);

    expect(par.cartas.length).equal(2);
    expect(par.cartas[0].valor).equal(7);
    expect(mazo.length).equal(5);
  });
  it("debería ignorar doble par", () => {
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
  });

  it("debería ignorar una pierna", () => {
    let mazo = [
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(1, "Diamantes"),
      new Carta(9, "Diamantes")
    ];

    let par = new Par(mazo);

    expect(par.cartas.length).equal(0);
    expect(mazo.length).equal(6);

  });
});
