import { Carta } from "carta";

export class Escalera {
  public mejorEscalera: Array<Carta> = [];
  public cartaMayor: Carta;
  public nombre: string = "Escalera";
  // check for straight
  check(mano: Array<Carta>) {
    for (let i = 0; i < mano.length; i++) {
      if (
        i + 4 < 7 &&
        mano[i].valor - mano[i + 1].valor === 1 &&
        mano[i].valor - mano[i + 2].valor === 2 &&
        mano[i].valor - mano[i + 3].valor === 3 &&
        mano[i].valor - mano[i + 4].valor === 4
      ) {
        this.mejorEscalera.push(
          mano[i],
          mano[i + 1],
          mano[i + 2],
          mano[i + 3],
          mano[i + 4]
        );
        this.cartaMayor = mano[i];
      }
    }
  }
}
