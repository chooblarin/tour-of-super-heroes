import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { MarvelEvent } from './event';
import { MarvelService } from '../marvel/marvel.service';
import * as helper from '../marvel/helper';

@Injectable()
export class EventService {

  constructor(private marvelService: MarvelService) { }

  getEvents(): Observable<MarvelEvent[]> {
    return this.marvelService
      .getEvents()
      .pipe(
        map(response => response.data.results)
      );
  }

  getEvent(id: number): Observable<MarvelEvent> {
    return this.marvelService
      .getEvent(id)
      .pipe(
        map(response => response.data.results[0])
      );
  }

  thumbnailUrl(event: MarvelEvent): string {
    const { path, extension } = event.thumbnail;
    return `${path}/standard_fantastic.${extension}`;
  }

  detailLink(event: MarvelEvent): string {
    return helper.detailLink(event);
  }
}
