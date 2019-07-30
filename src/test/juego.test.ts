import { expect } from "chai";
import { Carta } from "../Carta";
import { Juego } from "../juego";

describe("Juego", () => {
  describe("crearMazo", () => {
    it("deberia crear un mazo", () => {
      // Arrange
      const game = new Juego(1);

      // Act
      const actual = game.mazo.cartas;

      // Assert
      expect(actual).to.be.a("array");
      expect(actual.length).equal(52);
    });
    describe("mezclarMazo", () => {
      it("deberia mezclar mazo", () => {
        // Arrange
        const game = new Juego(1);

        // Act & Assert
      });
    });

    describe("repartirCartas", () => {
      it("deberia repartir cartas a los jugadores", () => {
        // Arrange
        const game = new Juego(1);
        const cartasRestantesEsperadas = 50;
        const cartasEnManoEsperadas = 2;

        // Act & Assert
        game.repartirCartasJugadores();

        expect(game.jugadores[0].manoTotal.length).equal(cartasEnManoEsperadas, "Cartas en mano no son las esperadas");
        game.jugadores[0].manoTotal.forEach((carta) => expect(carta).to.be.a("Object"));
        expect(game.mazo.cartas.length).equal(
          cartasRestantesEsperadas,
          "Cartas restantes en el mazo no son las esperadas"
        );

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
      const game = new Juego(1);

      // Act & Assert
      game.repartirCartasJugadores();
      expect(game.manoCroupier.length).equal(0, "no hay cartas");
      game.flop();
      expect(game.manoCroupier.length).equal(3, "saco tres cartas");
    });
  });
  describe("river", () => {
    it("deberia repartir cuatro cartas a mano de croupier", () => {
      // Arrange
      const game = new Juego(1);

      // Act & Assert
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
      const game = new Juego(1);

      // Act & Assert
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
      const game = new Juego(1);

      // Act & Assert
      game.repartirCartasJugadores();
      expect(game.manoCroupier.length).equal(0, "no hay cartas");
      game.flop();
      game.river();
      game.turn();
      expect(game.manoCroupier.length).equal(5, "saque cuatro cartas");
    });
  });
  describe("orden de funciones flop, turn y river", () => {
    it("deberia impedir que funcione si no es en orden", () => {
      // Arrange
      const game = new Juego(1);

      // Act & Assert
      game.repartirCartasJugadores();
      expect(game.manoCroupier.length).equal(0, "no hay cartas");
      expect(game.river.bind(game)).to.throw();
    });
  });
});
