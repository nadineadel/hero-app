import {Component, OnInit} from '@angular/core';

import {HeroService} from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor() {
  }

  title = 'Tour of Heroes';

  ngOnInit(): void {
  }
}
