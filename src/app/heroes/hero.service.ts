import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';
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
}
