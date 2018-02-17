import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { MarvelData } from '../marvel/response';
import { MarvelService } from '../marvel/marvel.service';

@Injectable()
export class HeroService {

  constructor(private marvelService: MarvelService) { }

  getHeroes(limit: number = 20, offset: number = 0): Observable<MarvelData<Hero>> {
    return this.marvelService
      .getHeroes(limit, offset)
      .pipe(
        map(response => response.data)
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.marvelService
      .getHero(id)
      .pipe(
        map(response => response.data.results[0])
      );
  }

  thumbnailUrl(hero: Hero): string {
    const { path, extension } = hero.thumbnail;
    return `${path}/standard_fantastic.${extension}`;
  }

  imageUrl(hero: Hero): string {
    const { path, extension } = hero.thumbnail;
    return `${path}/portrait_uncanny.${extension}`;
  }

  detailLink(hero: Hero): string {
    const arr = hero.urls.filter(it => it.type == 'detail');
    return arr.length ? arr[0].url : '';
  }

  wikiLink(hero: Hero): string {
    const arr = hero.urls.filter(it => it.type == 'wiki');
    return arr.length ? arr[0].url : '';
  }
}
