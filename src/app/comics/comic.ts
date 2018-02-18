import { MarvelModel } from '../marvel/model';

export class Comic implements MarvelModel {
  id: number;
  title: string;
  description: string;
  thumbnail: any;
  isbn: string;
  images: any[];
  prices: any[];
  dates: any[];
  urls: any[];
}
