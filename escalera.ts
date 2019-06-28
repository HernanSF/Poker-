import { Carta } from "carta";

export class Escalera {
  public tiene: Array<Carta> = [];
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
        this.tiene.push(
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
  checkAlternativa(mano: Array<Carta>) {
    if (
      mano[0].valor === 14 &&
      mano[6].valor === 2 &&
      mano[5].valor === 3 &&
      mano[4].valor === 4 &&
      mano[3].valor === 5
    ) {
      this.tiene.push(mano[0], mano[6], mano[5], mano[4], mano[3]);
      this.cartaMayor = mano[6];
    }
  }
}
