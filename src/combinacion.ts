import { Carta } from "./carta";

export abstract class Combinacion {
  public cartas: Carta[] = [];
  public puntajeBase: number;
  public puntajeIgualado: number;
}
