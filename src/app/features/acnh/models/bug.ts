import { IBaseAnimal } from './base-animal';

export interface IBug extends IBaseAnimal {
  speed: string;
  'price-flick': number;
}
