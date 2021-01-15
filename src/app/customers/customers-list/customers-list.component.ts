import { Customer } from './../../shared/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  private _customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'EUR';

  constructor() { }

  ngOnInit(): void {
  }

  @Input() get customers(): Customer[]{
    return this._customers;
  }

  set customers(value: Customer[]){
    if(value){
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  calculateOrders(){
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: Customer) =>{
      this.customersOrderTotal += customer.orderTotal;
    });
  }

}
