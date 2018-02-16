import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    const heroId = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(heroId)
      .subscribe(hero => this.hero = hero);
  }
}
