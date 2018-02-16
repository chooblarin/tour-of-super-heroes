import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Comic } from './comic';
import { MarvelService } from '../marvel.service';

@Injectable()
export class ComicService {

  constructor(private marvelService: MarvelService) { }

  getComics(): Observable<Comic[]> {
    return this.marvelService.getComics();
  }

  getComic(id: number): Observable<Comic> {
    return this.marvelService.getComic(id);
  }

  thumbnailUrl(comic: Comic): string {
    const { path, extension } = comic.thumbnail;
    return `${path}/portrait_uncanny.${extension}`;
  }

  imageUrl(comic: Comic): string {
    if (0 < comic.images.length) {
      const { path, extension } = comic.images[0];
      return `${path}.${extension}`;
    } else {
      return '';
    }
  }

  printPrice(comic: Comic): string {
    const printPrices = comic.prices
      .filter(p => p.type == 'printPrice')
      .map(p => p.price);

    if (0 < printPrices.length) {
      return printPrices[0];
    } else {
      return '--';
    }
  }
}
