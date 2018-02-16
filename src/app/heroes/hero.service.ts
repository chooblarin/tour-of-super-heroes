import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Hero } from '../hero';
import { Comic } from '../comic';
import { MarvelEvent } from '../event';
import { MarvelService } from '../marvel.service';

@Injectable()
export class HeroService {

  constructor(private marvelService: MarvelService) { }

  getHeroes(): Observable<Hero[]> {
    return this.marvelService.getHeroes();
  }

  getHero(id: number): Observable<Hero> {
    return this.getHero(id);
  }

  getComics(): Observable<Comic[]> {
    return this.getComics();
  }

  getEvents(): Observable<MarvelEvent[]> {
    return this.getEvents();
  }
}
