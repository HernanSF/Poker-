import { Carta } from "./carta";
import { Juego } from "./game";
import { Jugador } from "./jugador";
import { Reglas } from "./reglas";

const game = new Juego();
game.crearMazo();
game.mezclarMazo();
const mano = game.mazo.splice(0, 7);
console.log(mano);
// always pass the array of cards sorted from upper values to lower values
mano.sort((a, b) => b.valor - a.valor);
const escalera = new Reglas();
escalera.check(mano);
if (escalera.tiene.length === 5) {
  console.log(
    "Tienes " + escalera.nombre + " al " + escalera.cartaMayor.nombre + "!!",
  );
}
escalera.checkAlternativa(mano);
if (escalera.tiene.length === 5) {
  console.log(
    "Tienes " + escalera.nombre + " al " + escalera.cartaMayor.nombre + "!!",
  );
}

//   function checkPoker() {
//     return bestHand;
//   }
//   function checkFull() {
//     return bestHand;
//   }
//   function checkColor() {
//     return bestHand;
//   }
//   function checkPierna() {
//     return bestHand;
//   }
//   function checkDoblePar() {
//     return bestHand;
//   }
//   function checkPar() {
//     return bestHand;
//   }
//   function checkCartaAlta() {
//     return bestHand;
//   }
