import { Component, OnInit, Input } from '@angular/core';


import { Observable } from 'rxjs';
import { MetaData } from '../models/metaData' 
import { Data_employees } from '../models/data_employees';
import { Data_products } from '../models/data_products';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() isEmployeeOrProduct: string;
  employeeData: Data_employees[] = [];
  productData: Data_products[] = [];
  
  constructor(private dataTableService: DataTableService) { }

  ngOnInit() {
    this.getTableData();
    this.isEmployeeOrProduct = 'Employee';
  }

  getTableData() {
    this.dataTableService.getTableData().subscribe(result => {
      if (result != undefined) {       
        let resultStringify = JSON.stringify(result);
        let resultParse = JSON.parse(resultStringify);
        resultParse.Employees.forEach(value => {
          this.employeeData.push(value);
        })
        resultParse.products.forEach(value => {
          this.productData.push(value);
        })
      }
    });
            
  }

 
}
