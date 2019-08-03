import { Carta } from "./carta";
import { Combinacion } from "./combinacion";


export class Jugador {
  public id: number;
  public fichas: number;
  public mano: Carta[] = [];
  public combinacion: Combinacion;
  public jugandoMano: boolean;
  public jugandoPartida: boolean;
  public ganoMano: boolean;
  public ganoPartida: boolean;

  constructor() {
    this.fichas = 1000;
    this.jugandoMano = true;
    this.jugandoPartida = true;
    this.ganoMano = false;
    this.ganoPartida = false;
  }
}
