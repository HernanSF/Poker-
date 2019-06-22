import { Carta } from "./carta";

export class Jugador {
  public id: number;
  public nombre: string;
  public fichas: number = 100;
  public manoTotal: Carta[] = [];
  public manoFinal: Carta[] = [];
  public combo: string ;
  public mejorCarta: number;
  public gano: boolean = false;
}
