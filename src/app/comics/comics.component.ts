import { Component, OnInit } from '@angular/core';

import { HeroService } from '../heroes/hero.service';
import { Comic } from '../comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: Comic[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.heroService.getComics()
      .subscribe(comics => this.comics = comics);
  }

  imageUrl(comic: Comic): string {
    const { path, extension } = comic.thumbnail;
    return `${path}/portrait_uncanny.${extension}`;
  }
}
