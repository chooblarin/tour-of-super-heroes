import { Component, OnInit } from '@angular/core';

import { MarvelEvent } from './event';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: MarvelEvent[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }
}
