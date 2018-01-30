import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../interfaces";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input("data") employeeList: Employee[];

  constructor() { }

  ngOnInit() {
  }

}
