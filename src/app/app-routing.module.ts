import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment'
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: !environment.production }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
