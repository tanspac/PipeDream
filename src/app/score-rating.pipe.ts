import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Rating'
})
export class ScoreRatingPipe implements PipeTransform {

  transform(score: number): string {
    let rating: string;
    console.count('RatingPipe');
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

}
