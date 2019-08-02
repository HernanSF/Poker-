import { expect } from "chai";
import { Carta } from "../elementos-principales/carta";
import { CartaMasAlta } from "../combinaciones-de-poker/carta-mas-alta";

describe("carta mas alta", () => {
  it("debería elegir las cartas mas altas", () => {
    let mazo = [
      new Carta(9, "Diamantes"),
      new Carta(8, "Diamantes"),
      new Carta(7, "Diamantes"),
      new Carta(6, "Diamantes"),
      new Carta(4, "Diamantes"),
      new Carta(3, "Diamantes"),
      new Carta(2, "Diamantes")
    ];

    let actual = new CartaMasAlta(mazo, 5);

    expect(actual.cartas.length).equal(5);
    expect(actual.cartas[0].valor).equal(9);
    expect(mazo.length).equal(2);
  });
});