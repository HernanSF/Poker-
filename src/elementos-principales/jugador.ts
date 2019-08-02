import { Carta } from "./carta";
import { Combinacion } from "./combinacion";

export class Jugador {
  public id: number;
  public fichas: number;
  public manoTotal: Carta[] = [];
  public manoFinal: Carta[] = [];
  public puntaje: number[]
  public jugandoMano: boolean;
  public jugandoPartida: boolean;
  public ganoMano: boolean;
  public ganoPartida: boolean;

  constructor() {
    this.fichas = 1000;
    this.jugandoMano = true;
    this.jugandoPartida = true;
    this.puntaje = []
    this.ganoMano = false;
    this.ganoPartida = false;
  }
}
