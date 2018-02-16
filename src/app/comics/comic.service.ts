import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Comic } from '../comic';
import { MarvelService } from '../marvel.service';

@Injectable()
export class ComicService {

  constructor(private marvelService: MarvelService) { }

  getComics(): Observable<Comic[]> {
    return this.marvelService.getComics();
  }
}
