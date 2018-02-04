import { Component, OnInit, Input } from '@angular/core';

import { Score } from "../interfaces";

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  @Input() scores: Score[];
  
  public filter: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
