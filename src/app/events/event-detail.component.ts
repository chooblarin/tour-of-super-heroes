import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { MarvelEvent } from './event';
import { EventService } from './event.service';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: MarvelEvent;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(event => {
        console.log(event);
        this.event = event;
      });
  }
}
