import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";

import {Employee} from "./interfaces";

@Injectable()
export class EmployeeDataService{
  private data: BehaviorSubject<Employee[]>;

  public get Observable(): Observable<Employee[]>{
    return this.data.asObservable();
  }

  public set Update(value: Employee[]){
    this.data.next(value);
  }

  public get Snapshot(): Employee[]{
    return this.data.getValue();
  }
  
  constructor(private http: Http){
    this.data = new BehaviorSubject([]);
    this.getRow();
  }
    
    private getRow(){
       this.http.get("../assets/employees.json").toPromise().then(data => {
         this.data.next(data.json() as Employee[]);
        });  
    }

    // public lazyLoad(){
    //     this.http.get("../lazyLoad.json").toPromise().then(data =>{
    //         this.listRows = data.json().concat(this.listRows);
    //     })
    // }
}