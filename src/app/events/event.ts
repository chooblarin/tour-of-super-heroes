import { MarvelModel } from '../marvel/model';

export class MarvelEvent implements MarvelModel {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public start: string,
    public end: string,
    public thumbnail: any,
    public urls: any[]
  ) { }
}
