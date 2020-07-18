import { IBaseItem } from './base-item';

export interface IFossil extends IBaseItem {
  price: number;
  'museum-phrase': string;
}
