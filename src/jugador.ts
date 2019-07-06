import { Carta } from "./Carta";

export class Jugador {
  public id: number;
  public nombre: string;
  public fichas: number = 100;
  public manoTotal: Carta[] = [];
  public manoFinal: { mano: Carta[]; nombre: string; jerarquia: number[] };
  public gano: boolean = false;
}
