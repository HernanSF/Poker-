import { Carta } from "./carta";
import { Jugador } from "./jugador";
import { Juego } from "./game";
import { Escalera } from "./escalera";

let game = new Juego();
game.crearMazo();
game.mezclarMazo();
let mano = game.mazo.splice(0, 7);
console.log(mano);
// always pass the array of cards sorted from upper values to lower values
mano.sort((a, b) => b.valor - a.valor);
let escalera = new Escalera();
escalera.check(mano);
if (escalera.tiene.length === 5) {
  console.log(
    "Tienes " + escalera.nombre + " al " + escalera.cartaMayor.nombre + "!!"
  );
}
escalera.checkAlternativa(mano);
if (escalera.tiene.length === 5) {
  console.log(
    "Tienes " + escalera.nombre + " al " + escalera.cartaMayor.nombre + "!!"
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
