import { Component, OnInit, Input } from '@angular/core';
import {MatDialog } from '@angular/material';

import { IScore } from "../interfaces";
import { ScoreDetailsComponent } from "../score-details/score-details.component";

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  @Input() scores: IScore[];
  
  public filter: number = 10;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  public getRating(score: number): string{
    let rating: string;
    console.count("getRating");
    if(score > 249000){
      rating = "Daniel Boone";
    }
    else if(score > 200000){
      rating = "Trail Guide";
    }
    else if(score > 150000){
      rating = "Adventurer";
    }
    else if(score > 100000){
      rating = "Pioneer";
    }
    else if(score > 50000){
      rating = "Greenhorn";
    }
    else{
      rating = "Buzzard food";
    }
    return rating;
  }

  public showDetails(entry: IScore){
    this.dialog.open(ScoreDetailsComponent, {data: entry});
  }
}
