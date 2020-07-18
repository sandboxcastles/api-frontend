import { IAvailability } from './availability';
import { IBaseItem } from './base-item';

export interface IBaseAnimal extends IBaseItem {
  availability: IAvailability;
  price: number;
  'catch-phrase': string;
  'museum-phrase': string;
  icon_uri: string;
}
