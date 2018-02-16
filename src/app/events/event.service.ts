import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MarvelEvent } from './event';
import { MarvelService } from '../marvel.service';

@Injectable()
export class EventService {

  constructor(private marvelService: MarvelService) { }

  getEvents(): Observable<MarvelEvent[]> {
    return this.marvelService.getEvents();
  }

  getEvent(id: number): Observable<MarvelEvent> {
    return this.marvelService.getEvent(id);
  }

  thumbnailUrl(event: MarvelEvent): string {
    const { path, extension } = event.thumbnail;
    return `${path}/standard_fantastic.${extension}`;
  }
}
