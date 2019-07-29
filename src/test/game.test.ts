import { expect } from "chai";
import { Carta } from "../Carta";
import { Juego } from "../game";

describe("Juego", () => {
  describe("crearMazo", () => {
    it("deberia crear un mazo", () => {
      // Arrange
      const game = new Juego();

      // Act
      game.crearMazo();
      const actual = game.mazo;

      // Assert
      expect(actual).to.be.a("array");
      expect(actual.length).equal(52);

      const palos = ["corazones", "diamantes", "picas", "treboles"];
      const cartasEsperadas = [
        { nombre: "As", valor: 14 },
        { nombre: "Rey", valor: 13 },
        { nombre: "Reina", valor: 12 },
        { nombre: "Jota", valor: 11 },
        { nombre: "Diez", valor: 10 },
        { nombre: "Nueve", valor: 9 },
        { nombre: "Ocho", valor: 8 },
        { nombre: "Siete", valor: 7 },
        { nombre: "Seis", valor: 6 },
        { nombre: "Cinco", valor: 5 },
        { nombre: "Cuatro", valor: 4 },
        { nombre: "Tres", valor: 3 },
        { nombre: "Dos", valor: 2 }
      ];

      let indice = 0;
      // verificar que todas las cartas esten bien
      palos.forEach((palo) => {
        cartasEsperadas.forEach((cartaEsperada) => {
          const carta = actual[indice];
          expect(carta.palo).equal(palo);
          expect(carta.valor).equal(cartaEsperada.valor);
          indice++;
        });
      });
    });
  });

  describe("mezclarMazo", () => {
    it("deberia mezclar mazo", () => {
      // Arrange
      const game = new Juego();

      // Act & Assert
      expect(game.mezclado).to.be.false;
      game.mezclarMazo();
      expect(game.mezclado).to.be.true;
    });
  });

  describe("repartirCartas", () => {
    it("deberia repartir cartas a los jugadores", () => {
      // Arrange
      const game = new Juego();
      const cartasRestantesEsperadas = 50;
      const cartasEnManoEsperadas = 2;

      // Act & Assert
      game.crearMazo();
      game.crearJugadores(1);
      game.repartirCartasJugadores();

      expect(game.jugadores[0].manoTotal.length).equal(cartasEnManoEsperadas, "Cartas en mano no son las esperadas");
      game.jugadores[0].manoTotal.forEach((carta) => expect(carta).to.be.a("Object"));
      expect(game.mazo.length).equal(cartasRestantesEsperadas, "Cartas restantes en el mazo no son las esperadas");

      // game.jugadores[0].manoTotal.forEach((carta) => {
      //   const cartaDelMazo = game.mazo.find((cartaMazo) => cartaMazo.nombre === carta.nombre);
      //   expect(cartaDelMazo).not.exist;
      // });
    });
  });
});

describe("flop", () => {
  it("deberia repartir tres cartas a mano de croupier", () => {
    // Arrange
    const game = new Juego();

    // Act & Assert
    game.crearMazo();
    game.crearJugadores(1);
    game.repartirCartasJugadores();
    expect(game.manoCroupier.length).equal(0, "no hay cartas");
    game.flop();
    expect(game.manoCroupier.length).equal(3, "saco tres cartas");
  });
});
describe("river", () => {
  it("deberia repartir cuatro cartas a mano de croupier", () => {
    // Arrange
    const game = new Juego();

    // Act & Assert
    game.crearMazo();
    game.crearJugadores(1);
    game.repartirCartasJugadores();
    expect(game.manoCroupier.length).equal(0, "no hay cartas");
    game.flop();
    game.river();
    expect(game.manoCroupier.length).equal(4, "saque cuatro cartas");
  });
});

describe("turn", () => {
  it("deberia repartir cinco cartas a mano de croupier", () => {
    // Arrange
    const game = new Juego();

    // Act & Assert
    game.crearMazo();
    game.crearJugadores(1);
    game.repartirCartasJugadores();
    expect(game.manoCroupier.length).equal(0, "no hay cartas");
    game.flop();
    game.river();
    game.turn();
    expect(game.manoCroupier.length).equal(5, "saque cuatro cartas");
  });
});
describe("mano de croupier al azar", () => {
  it("deberia repartir cinco cartas al azar a la mano de croupier", () => {
    // Arrange
    const game = new Juego();

    // Act & Assert
    game.crearMazo();
    game.crearJugadores(1);
    game.repartirCartasJugadores();
    expect(game.manoCroupier.length).equal(0, "no hay cartas");
    game.mezclarMazo();
    game.flop();
    game.river();
    game.turn();
    expect(game.manoCroupier.length).equal(5, "saque cuatro cartas");
  });
});
describe("orden de funciones flop, turn y river", () => {
  it("deberia impedir que funcione si no es en orden", () => {
    // Arrange
    const game = new Juego();

    // Act & Assert
    game.crearMazo();
    game.crearJugadores(1);
    game.repartirCartasJugadores();
    expect(game.manoCroupier.length).equal(0, "no hay cartas");
    game.mezclarMazo();
    expect(game.river.bind(game)).to.throw();
  });
});
