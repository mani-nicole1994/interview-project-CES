import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-data-table',
  templateUrl: './product-data-table.component.html',
  styleUrls: ['./product-data-table.component.css']
})
export class ProductDataTableComponent implements OnInit {
  @Input() productTableData;
  config;

  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.productTableData.length
    };
  }
}
