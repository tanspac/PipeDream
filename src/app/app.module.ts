import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { ScoresDataService } from "./scores-data.service";
import { ScoreRatingPipe } from './score-rating.pipe';
import { ScoreDetailsComponent } from './score-details/score-details.component';
import { NumSortPipe } from './num-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    ScoreRatingPipe,
    ScoreDetailsComponent,
    NumSortPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ScoresDataService],
  entryComponents: [ScoreDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
