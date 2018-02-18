import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { MarvelEvent } from './event';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [
    '../page-panel.css',
    './events.component.css'
  ]
})
export class EventsComponent implements OnInit {

  events: MarvelEvent[] = [];
  pageSize: number = 10;
  currentPage: number;
  totalPageCount: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.route
      .queryParamMap
      .pipe(
        switchMap(params => {
          const page = +(params.get('page') || '1');
          const offset = (page - 1) * this.pageSize;
          return this.eventService.getEvents(this.pageSize, offset);
        })
      )
      .subscribe(({ results, total, offset }) => {
        this.events = results;
        this.currentPage = offset / this.pageSize + 1;
        this.totalPageCount = Math.ceil(total / this.pageSize);
      });
  }

  goToNextPage() {
    this.goToPage(this.currentPage + 1);
  }

  goToPrevPage() {
    this.goToPage(this.currentPage - 1);
  }

  private goToPage(page: number | string) {
    this.router.navigate(['/events'], { queryParams: { page } });
  }
}
