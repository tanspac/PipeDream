import { Component } from '@angular/core';
import { ScoresDataService } from "./scores-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public scores: ScoresDataService){}

  title = 'app';
}
