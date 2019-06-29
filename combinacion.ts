import { Carta } from "./carta";

export abstract class Combinacion {

    public get valor(): number {
        return this.valorBase + this.cartas[0].valor;
    }

    public cartas: Carta[] = [];
    protected abstract valorBase: number;
}
