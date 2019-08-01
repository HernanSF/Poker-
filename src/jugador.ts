import { Carta } from "./Carta";

export class Jugador {
  public id: number;
  public nombre: string;
  public fichas: number;
  public tipoApuesta: { name: string; amount: number };
  public manoTotal: Carta[] = [];
  public manoFinal: { mano: Carta[]; nombre: string; jerarquia: number };
  public jugandoMano: boolean;
  public jugandoPartida: boolean;
  public ganoMano: boolean;
  public ganoPartida: boolean;

  constructor() {
    this.fichas = 1000;
    this.tipoApuesta = { name: "", amount: 0 };
    this.jugandoMano = true;
    this.jugandoPartida = true;
    this.ganoMano = false;
    this.ganoPartida = false;
  }

  apuesta(name:string, amount:number){
    this.tipoApuesta.name = name
    this.tipoApuesta.amount = amount
  }
}
