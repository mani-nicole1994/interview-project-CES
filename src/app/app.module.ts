import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ProductDataTableComponent } from './data-table/product-data-table/product-data-table.component';
import { EmployeeDataTableComponent } from './data-table/employee-data-table/employee-data-table.component';
import { TabsComponent } from './tabs/tabs.component';
import { DataTableService } from './data-table/data-table.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './data-table/pagination-data-table/pagination-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    TabsComponent,
    ProductDataTableComponent,
    EmployeeDataTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [DataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
