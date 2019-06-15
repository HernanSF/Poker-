import { expect } from 'chai';
import { Juego } from '../game';

describe("Juego", () => {
    describe("crearMazo", () => {
        it("deberia crear un mazo", () => {
            // Arrange
            const game = new Juego();

            // Act
            const actual = game.crearMazo();

            // Assert
            expect(actual).to.be.a('array');
            expect(actual.length).equal(52);

            let palos = ["corazones", "diamantes", "picas", "treboles"];
            let valores = [
                "As",
                "Rey",
                "Reina",
                "Jota",
                "diez",
                "nueve",
                "ocho",
                "siete",
                "seis",
                "cinco",
                "cuatro",
                "tres",
                "dos"
            ];

            let indice = 0;
            palos.forEach(palo => {
                valores.forEach(valor => {
                    const carta = actual[indice];
                    expect(carta.palo).equal(palo);
                    expect(carta.valor).equal(valor);
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
            const numeroDeJugadores = 1;
            const cartasRestantesEsperadas = 50;
            const cartasEnManoEsperadas = 2;

            // Act & Assert
            game.repartirCartasJugadores(1);

            expect(game.jugadores.length).equal(numeroDeJugadores, "Cantidad de jugadores no es el esperado");
            expect(game.jugadores[0].manoInicial.length).equal(cartasEnManoEsperadas, "Cartas en mano no son las esperadas");
            expect(game.mazo.length).equal(cartasRestantesEsperadas, "Cartas restantes en el mazo no son las esperadas");

            game.jugadores[0].manoInicial.forEach(carta => {
                const cartaDelMazo = game.mazo.find(cartaMazo => cartaMazo.nombre === carta.nombre);
                expect(cartaDelMazo).not.exist;
            });
        });
    });
});

describe("flop", () => {
    it("deberia repartir tres cartas a mano de croupier", () => {
        // Arrange
        const game = new Juego();

        // Act & Assert
        expect(game.manoCroupier.length).equal(0, "no hay cartas")
        game.flop();
        expect(game.manoCroupier.length).equal(3, "saco tres cartas")

    });
});
describe("river", () => {
    it("deberia repartir cuatro cartas a mano de croupier", () => {
        // Arrange
        const game = new Juego();

        // Act & Assert
        expect(game.manoCroupier.length).equal(0, "no hay cartas")
        game.flop()
        game.river();
        expect(game.manoCroupier.length).equal(4, "saque cuatro cartas")

    });
});

describe("turn", () => {
    it("deberia repartir cinco cartas a mano de croupier", () => {
        // Arrange
        const game = new Juego();

        // Act & Assert
        expect(game.manoCroupier.length).equal(0, "no hay cartas")
        game.flop()
        game.river();
        game.turn()
        expect(game.manoCroupier.length).equal(5, "saque cuatro cartas")

    });
});
describe("mano de croupier al azar", () => {
    it("deberia repartir cinco cartas al azar a la mano de croupier", () => {
        // Arrange
        const game = new Juego();

        // Act & Assert
        expect(game.manoCroupier.length).equal(0, "no hay cartas")
        game.mezclarMazo()
        game.flop()
        game.river();
        game.turn();
        expect(game.manoCroupier.length).equal(5, "saque cuatro cartas");
        console.log(game.manoCroupier)

    });
});
describe("orden de funciones flop, turn y river", () => {
    it("deberia impedir que funcione si no es en orden", () => {
        // Arrange
        const game = new Juego();

        // Act & Assert
        expect(game.manoCroupier.length).equal(0, "no hay cartas")
        game.mezclarMazo()
        expect(game.river.bind(game)).to.throw();
  });
});