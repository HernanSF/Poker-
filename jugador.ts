import { Carta } from "./carta";

export class Jugador {
  id: number;
  nombre: string;
  fichas: number;
  manoTotal: Array<Carta>;
  manoFinal: Array<Carta>;
}
