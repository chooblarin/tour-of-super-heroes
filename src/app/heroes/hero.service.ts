import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { MarvelService } from '../marvel.service';

@Injectable()
export class HeroService {

  constructor(private marvelService: MarvelService) { }

  getHeroes(): Observable<Hero[]> {
    return this.marvelService.getHeroes();
  }

  getHero(id: number): Observable<Hero> {
    return this.marvelService.getHero(id);
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
