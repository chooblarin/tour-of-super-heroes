import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { ComicDetailComponent } from './comics/comic-detail.component';
import { EventDetailComponent } from './events/event-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarvelService } from './marvel/marvel.service';
import { HeroService } from './heroes/hero.service';
import { ComicService } from './comics/comic.service';
import { EventService } from './events/event.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ComicsComponent,
    EventsComponent,
    HeroDetailComponent,
    ComicDetailComponent,
    EventDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MarvelService,
    HeroService,
    ComicService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
