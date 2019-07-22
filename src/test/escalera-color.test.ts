import { expect } from "chai";
import { Carta } from "../Carta";
import { EscaleraColor } from "../escalera-color";
import { Reglas } from "../reglas";

describe.only("Escalera de Color", () => {
  it("debería funcionar", () => {
    let mazo = [
      new Carta(9, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(2, "Diamantes"),
      new Carta(2, "Diamantes")
    ];
    let actual = new EscaleraColor(mazo);

    expect(actual).to.exist;
    expect(actual.cartas[0].valor).equal(9);
    expect(actual.cartas.length).equal(5);

    mazo = [
      new Carta(10, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(5, "Diamantes"),
      new Carta(4, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(2, "Diamantes")
    ];
    actual = new EscaleraColor(mazo);

    expect(actual).to.exist;
    expect(actual.cartas[0].valor).equal(6);
    expect(actual.cartas.length).equal(5);
  });
});
