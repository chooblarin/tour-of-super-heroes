import { MarvelModel } from '../marvel/model';

export class Hero implements MarvelModel {
  id: number;
  name: string;
  description: string;
  thumbnail: any;
  urls: any[];
}
