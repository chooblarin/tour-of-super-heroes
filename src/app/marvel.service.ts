import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { Hero } from './heroes/hero';
import { Comic } from './comics/comic';
import { MarvelEvent } from './events/event';

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

  getHeroes(): Observable<Response<Hero>> {
    const path = '/v1/public/characters';
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set('limit', '40')
      .set('orderBy', '-modified')
      .set('apikey', this.apiKey);
    return this.http.get<Response<Hero>>(url, { headers, params })
  }

  getHero(id: number): Observable<Response<Hero>> {
    const path = `/v1/public/characters/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set('apikey', this.apiKey);
    return this.http
      .get<Response<Hero>>(url, { headers, params });
  }

  getComics(): Observable<Response<Comic>> {
    const path = '/v1/public/comics';
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set('limit', '10')
      .set('orderBy', '-issueNumber')
      .set('apikey', this.apiKey);
    return this.http.get<Response<Comic>>(url, { headers, params });
  }

  getComic(id: number): Observable<Response<Comic>> {
    const path = `/v1/public/comics/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set('apikey', this.apiKey);
    return this.http.get<Response<Comic>>(url, { headers, params });
  }

  getEvents(): Observable<Response<MarvelEvent>> {
    const path = '/v1/public/events';
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set('limit', '10')
      .set('orderBy', '-startDate')
      .set('apikey', this.apiKey);
    return this.http.get<Response<MarvelEvent>>(url, { headers, params });
  }

  getEvent(id: number): Observable<Response<MarvelEvent>> {
    const path = `/v1/public/events/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set('apikey', this.apiKey);
    return this.http.get<Response<MarvelEvent>>(url, { headers, params });
  }
}
