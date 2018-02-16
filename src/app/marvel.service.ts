import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Hero } from './hero';
import { Comic } from './comic';
import { MarvelEvent } from './event';

interface Data<T> {
  results: T[]
}

interface Response<T> {
  data: Data<T>
}

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class MarvelService {

  private marvelApiUrl = 'https://gateway.marvel.com';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const path = '/v1/public/characters';
    const url = `${this.marvelApiUrl}${path}?limit=10&apikey=${this.apiKey}`;
    const params = new HttpParams()
      .set('limit', '50')
      .set('orderBy', '-modified')
      .set('apikey', this.apiKey);
    return this.http
      .get<Response<Hero>>(`${this.marvelApiUrl}${path}`, { headers, params })
      .pipe(
        map(response => response.data.results)
      );
  }

  getHero(id: number): Observable<Hero> {
    const path = `/v1/public/characters/${id}`;
    const url = `${this.marvelApiUrl}${path}?limit=10&apikey=${this.apiKey}`;
    const params = new HttpParams().set('apikey', this.apiKey);
    return this.http
      .get<Response<Hero>>(`${this.marvelApiUrl}${path}`, { headers, params })
      .pipe(
        map(response => response.data.results[0])
      );
  }

  getComics(): Observable<Comic[]> {
    const path = '/v1/public/comics';
    const url = `${this.marvelApiUrl}${path}?limit=10&apikey=${this.apiKey}`;
    const params = new HttpParams()
      .set('limit', '10')
      .set('orderBy', '-issueNumber')
      .set('apikey', this.apiKey);
    return this.http
      .get<Response<Comic>>(`${this.marvelApiUrl}${path}`, { headers, params })
      .pipe(
        map(response => response.data.results)
      );
  }

  getEvents(): Observable<MarvelEvent[]> {
    const path = '/v1/public/events';
    const url = `${this.marvelApiUrl}${path}?limit=10&apikey=${this.apiKey}`;
    const params = new HttpParams()
      .set('limit', '10')
      .set('orderBy', '-startDate')
      .set('apikey', this.apiKey);
    return this.http
      .get<Response<MarvelEvent>>(`${this.marvelApiUrl}${path}`, { headers, params })
      .pipe(
        map(response => response.data.results)
      );
  }
}
