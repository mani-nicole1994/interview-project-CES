import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design-challenge';
  product: string = "Product";
  employee: string = "Employee";
  isEmployeeOrProduct: string;

  tabChange(e: string) {
    if (e === this.product) {
      this.isEmployeeOrProduct = this.product;
    } else if (e === this.employee) {
      this.isEmployeeOrProduct = this.employee;
    }
  }
}
