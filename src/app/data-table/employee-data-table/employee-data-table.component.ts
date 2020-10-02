import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-data-table',
  templateUrl: './employee-data-table.component.html',
  styleUrls: ['./employee-data-table.component.css']
})
export class EmployeeDataTableComponent {
  @Input() employeeDataTable;
  config;

  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.employeeDataTable.length
    };
  }


}
