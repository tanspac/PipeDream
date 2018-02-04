import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";

import {Score} from "./interfaces";

@Injectable()
export class ScoresDataService{
  private data: BehaviorSubject<Score[]>;

  public get Observable(): Observable<Score[]>{
    return this.data.asObservable();
  }

  public set Update(value: Score[]){
    this.data.next(value);
  }

  public get Snapshot(): Score[]{
    return this.data.getValue();
  }
  
  constructor(private http: Http){
    this.data = new BehaviorSubject([]);
    this.getRow();
  }
    
    private getRow(){
       this.http.get("../assets/score_sheet.json").toPromise().then(data => {
         this.data.next(data.json() as Score[]);
        });  
    }

    // public lazyLoad(){
    //     this.http.get("../lazyLoad.json").toPromise().then(data =>{
    //         this.listRows = data.json().concat(this.listRows);
    //     })
    // }
}