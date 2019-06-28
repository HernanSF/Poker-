import { Carta } from "./carta";
import { Jugador } from "./jugador";
import { Juego } from "./game";
import { Escalera } from "./escalera";

let game = new Juego();
game.crearMazo();
// game.mezclarMazo();
let mano = game.mazo.splice(8, 7);
console.log(mano);
mano.sort((a, b) => b.valor - a.valor);
let escalera = new Escalera();
escalera.check(mano);
if (escalera.mejorEscalera.length === 5) {
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
//   function checkEscalera() {
// for (let i = 0; i < sieteCartas.length; i++) {
//     if (
//       i + 4 < 7 &&
//       sieteCartas[i].valor - sieteCartas[i + 1].valor === 1 &&
//       sieteCartas[i].valor - sieteCartas[i + 2].valor === 2 &&
//       sieteCartas[i].valor - sieteCartas[i + 3].valor === 3 &&
//       sieteCartas[i].valor - sieteCartas[i + 4].valor === 4
//     ) {
//       bestHand.push(
//         sieteCartas[i],
//         sieteCartas[i + 1],
//         sieteCartas[i + 2],
//         sieteCartas[i + 3],
//         sieteCartas[i + 4]
//       );
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
// }
