import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  pageSize: number = 20;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.route
      .queryParamMap
      .pipe(
        switchMap(params => {
          const page = +(params.get('page') || '1');
          const offset = (page - 1) * this.pageSize;
          return this.heroService.getHeroes(this.pageSize, offset);
        })
      )
      .subscribe(({ results }) => this.heroes = results);
  }

  goToNextPage() {
    const current = +(this.route.snapshot.queryParamMap.get('page') || '1');
    this.goToPage(current + 1);
  }

  goToPrevPage() {
    const current = +(this.route.snapshot.queryParamMap.get('page') || '1');
    // TODO: check if current is larger than 1
    this.goToPage(current - 1);
  }

  private goToPage(page: number | string) {
    this.router.navigate(['/heroes'], { queryParams: { page } });
  }
}
