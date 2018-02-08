import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

  private marvelApiUrl = 'https://gateway.marvel.com:443';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    const path = '/v1/public/characters';
    const url = `${this.marvelApiUrl}${path}?limit=10&apikey=${this.apiKey}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams()
      .set('limit', '10')
      .set('apikey', this.apiKey);
    return this.http
      .get(`${this.marvelApiUrl}${path}`, { headers, params });
  }
}
