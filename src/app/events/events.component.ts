import { Component, OnInit } from '@angular/core';

import { MarvelEvent } from '../event';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: MarvelEvent[] = [];

  constructor(private heroesService: HeroService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.heroesService.getEvents()
      .subscribe(events => this.events = events);
  }

  imageUrl(event: MarvelEvent): string {
    const { path, extension } = event.thumbnail;
    return `${path}/standard_fantastic.${extension}`;
  }
}
