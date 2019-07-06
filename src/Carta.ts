export class Carta {
  public valor: number;
  public palo: string;
  public nombre: string;

  public constructor(valor: number, palo: string) {
    this.valor = valor;
    this.palo = palo;
    this.nombre = valor + " de " + palo;
  }
}
