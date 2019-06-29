import { Carta } from "./carta";
import { Combinacion } from "./combinacion";
import { Par } from "./par";
import { Pierna } from "./pierna";

export class Full extends Combinacion {

    public get valor(): number {
        return this.valorBase + this.cartas[0].valor + this.cartas[3].valor;
    }

    public static calcularFull(mano: Carta[]): Full {
        const full = new Full([]);

        full.cartas = new Pierna(mano).cartas;

        // remover las cartas de pierna
        full.cartas = full.cartas.concat(new Par(mano).cartas);

        return full;
    }
    protected valorBase: number = 50;
}
