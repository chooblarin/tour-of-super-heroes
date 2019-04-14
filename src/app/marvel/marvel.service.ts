import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { MarvelResponse, MarvelData } from "./response";
import { Hero } from "../heroes/hero";
import { Comic } from "../comics/comic";
import { MarvelEvent } from "../events/event";

const headers = new HttpHeaders({ "Content-Type": "application/json" });

@Injectable()
export class MarvelService {
  private marvelApiUrl = "https://gateway.marvel.com";
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getHeroes(limit: number, offset: number): Observable<MarvelResponse<Hero>> {
    const path = "/v1/public/characters";
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set("limit", `${limit}`)
      .set("offset", `${offset}`)
      .set("orderBy", "-modified")
      .set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Hero>>(url, { headers, params });
  }

  getHero(id: number): Observable<MarvelResponse<Hero>> {
    const path = `/v1/public/characters/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Hero>>(url, { headers, params });
  }

  getComics(limit: number, offset: number): Observable<MarvelResponse<Comic>> {
    const path = "/v1/public/comics";
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set("limit", `${limit}`)
      .set("offset", `${offset}`)
      .set("orderBy", "-issueNumber")
      .set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Comic>>(url, { headers, params });
  }

  getComic(id: number): Observable<MarvelResponse<Comic>> {
    const path = `/v1/public/comics/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Comic>>(url, { headers, params });
  }

  getEvents(
    limit: number,
    offset: number
  ): Observable<MarvelResponse<MarvelEvent>> {
    const path = "/v1/public/events";
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set("limit", `${limit}`)
      .set("offset", `${offset}`)
      .set("orderBy", "-startDate")
      .set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<MarvelEvent>>(url, { headers, params });
  }

  getEvent(id: number): Observable<MarvelResponse<MarvelEvent>> {
    const path = `/v1/public/events/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<MarvelEvent>>(url, { headers, params });
  }
}
