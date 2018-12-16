import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { MarvelEvent } from './event';
import { MarvelData } from '../marvel/response';
import { MarvelService } from '../marvel/marvel.service';
import * as helper from '../marvel/helper';

@Injectable()
export class EventService {

  constructor(private marvelService: MarvelService) { }

  getEvents(limit: number = 10, offset: number = 0): Observable<MarvelData<MarvelEvent>> {
    return this.marvelService
      .getEvents(limit, offset)
      .pipe(
        map(response => response.data)
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

  coverImageUrl(event: MarvelEvent): string {
    const { path, extension } = event.thumbnail;
    return `${path}.${extension}`;
  }

  detailLink(event: MarvelEvent): string {
    return helper.detailLink(event);
  }

  period(event: MarvelEvent): string {
    const { start, end } = event;
    const s = moment(start).format('MMMM Do YYYY');
    const e = moment(end).format('MMMM Do YYYY');
    return `${s} - ${e}`
  }
}
