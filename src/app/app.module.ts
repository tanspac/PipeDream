import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { ScoresDataService } from "./scores-data.service";


@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ScoresDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
