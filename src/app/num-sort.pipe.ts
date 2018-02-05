import { Pipe, PipeTransform } from '@angular/core';
import { IScore } from "./interfaces";

@Pipe({
  name: 'numSort'
})
export class NumSortPipe implements PipeTransform {

  transform(scores: IScore[]): IScore[] {
    scores.sort((a: IScore, b: IScore)=>{
      if(a.points > b.points){
        return -1;
      }else if(a.points < b.points){
        return 1;
      }else{
        return 0;
      }
    });
    return scores;
  }

}
