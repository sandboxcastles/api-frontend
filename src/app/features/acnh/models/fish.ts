import { IBaseAnimal } from './base-animal';

export interface IFish extends IBaseAnimal {
  shadow: string;
  'price-cj': number;
}
