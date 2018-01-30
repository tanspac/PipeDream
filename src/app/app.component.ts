import { Component } from '@angular/core';
import { EmployeeDataService } from "./employee-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public employees: EmployeeDataService){}

  title = 'app';
}
