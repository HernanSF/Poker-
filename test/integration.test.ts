import { expect } from "chai";
import { Juego } from "../game";
describe("Juego", () => {
  it("debería funcionar", () => {
    const prueba = new Juego();

    prueba.crearMazo();
    prueba.mezclarMazo();

    prueba.crearJugadores(3);
    expect(prueba.jugadores.length).equal(3, "deberia crear tres jugadores");
    prueba.repartirCartasJugadores();
    expect(prueba.jugadores[0].manoTotal.length).equal(
      2,
      "deberia tener dos cartas"
    );
    expect(prueba.jugadores[1].manoTotal.length).equal(
      2,
      "deberia tener dos cartas"
    );
    expect(prueba.jugadores[2].manoTotal.length).equal(
      2,
      "deberia tener dos cartas"
    );
    prueba.flop();
    expect(prueba.manoCroupier.length).equal(3, "deberia tener tres cartas");

    prueba.river();
    expect(prueba.manoCroupier.length).equal(4, "deberia tener cuatro cartas");

    prueba.turn();
    expect(prueba.manoCroupier.length).equal(5, "deberia tener cinco cartas");
  });
});
