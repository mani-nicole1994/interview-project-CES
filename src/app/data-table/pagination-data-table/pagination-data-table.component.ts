import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination-data-table.component.html',
  styleUrls: ['./pagination-data-table.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() tableCongig;
  page: number = 1;
  pageSize: number = 1;
  config: any;

  constructor() { }

  ngOnInit() {
 
  }

  pageChanged(event) {
    this.tableCongig.currentPage = event;
  }
}
