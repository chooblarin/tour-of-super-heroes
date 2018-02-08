import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Hero } from './hero';

interface Data<T> {
  results: T[]
}

interface Response<T> {
  data: Data<T>
}

@Injectable()
export class HeroService {

  private marvelApiUrl = 'https://gateway.marvel.com:443';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const path = '/v1/public/characters';
    const url = `${this.marvelApiUrl}${path}?limit=10&apikey=${this.apiKey}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams()
      .set('limit', '10')
      .set('orderBy', '-modified')
      .set('apikey', this.apiKey);
    return this.http
      .get<Response<Hero>>(`${this.marvelApiUrl}${path}`, { headers, params })
      .pipe(
      map(response => response.data.results)
      )
  }
}
