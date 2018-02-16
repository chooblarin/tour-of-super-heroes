import { Component, OnInit } from "@angular/core";

import { Comic } from './comic';
import { ComicService } from './comic.service';

@Component({
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comic: Comic;

  constructor(comicService: ComicService) { }

  ngOnInit() { }
}
