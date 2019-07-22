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

    //   mazo = [
    //     new Carta(12, "Diamantes"),
    //     new Carta(11, "Diamantes"),
    //     new Carta(6, "Diamantes"),
    //     new Carta(5, "Diamantes"),
    //     new Carta(4, "Diamantes"),
    //     new Carta(3, "Diamantes"),
    //     new Carta(1, "Diamantes")
    //   ];
    //   actual = new EscaleraColor(mazo);
    //   expect(actual).to.exist;

    //   mazo = [
    //     new Carta(12, "Diamantes"),
    //     new Carta(11, "Diamantes"),
    //     new Carta(6, "Diamantes"),
    //     new Carta(5, "Diamantes"),
    //     new Carta(4, "Diamantes"),
    //     new Carta(3, "Diamantes"),
    //     new Carta(2, "Diamantes")
    //   ];
    //   actual = new EscaleraColor(mazo);
    //   expect(actual).to.exist;
    //   expect(actual.cartas.length).equal();
    //   expect(actual.cartas[0].valor).equal();

    //   mazo = [
    //     new Carta(12, "Diamantes"),
    //     new Carta(11, "Diamantes"),
    //     new Carta(10, "Diamantes"),
    //     new Carta(9, "Diamantes"),
    //     new Carta(8, "Diamantes"),
    //     new Carta(7, "Diamantes"),
    //     new Carta(6, "Diamantes")
    //   ];
    //   actual = new EscaleraColor(mazo);
    //   expect(actual).to.exist;
    //   expect(actual.cartas.length).equal(5);
    //   expect(actual.cartas[0].valor).equal(12);
    //   expect(actual.cartas[1].valor).equal(11);
    //   expect(actual.cartas[2].valor).equal(10);
    //   expect(actual.cartas[3].valor).equal(9);
    //   expect(actual.cartas[4].valor).equal(8);

    //   mazo = [
    //     new Carta(14, "Diamantes"),
    //     new Carta(13, "Diamantes"),
    //     new Carta(12, "Diamantes"),
    //     new Carta(5, "Diamantes"),
    //     new Carta(4, "Diamantes"),
    //     new Carta(3, "Diamantes"),
    //     new Carta(2, "Diamantes"),
    //     new Carta(1, "Diamantes")
    //   ];
    //   actual = new EscaleraColor(mazo);
    //   expect(actual).to.exist;
    //   expect(actual.cartas.length).equal(5);
    //   expect(actual.cartas[0].valor).equal(5);
    //   expect(actual.cartas[1].valor).equal(4);
    //   expect(actual.cartas[2].valor).equal(3);
    //   expect(actual.cartas[3].valor).equal(2);
    //   expect(actual.cartas[4].valor).equal(1);
  });
});
