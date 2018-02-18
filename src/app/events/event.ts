import { MarvelModel } from '../marvel/model';

export class MarvelEvent implements MarvelModel {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
  thumbnail: any;
  urls: any[];
}
