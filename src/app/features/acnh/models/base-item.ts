import { IAcnhName } from './acnh-name';

export interface IBaseItem {
  id: number;
  'file-name': string;
  name: IAcnhName;
  image_uri: string;
}
