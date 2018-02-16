import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MarvelEvent } from '../event';
import { MarvelService } from '../marvel.service';

@Injectable()
export class EventService {

  constructor(private marvelService: MarvelService) { }

  getEvents(): Observable<MarvelEvent[]> {
    return this.marvelService.getEvents();
  }
}
