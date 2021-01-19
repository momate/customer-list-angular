import { SorterService } from './../../core/sorter.service';
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


  constructor(private sorterService: SorterService) { }

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

  filter(data: string){
    if(data){
      this.filteredCustomers = this.customers.filter((c: Customer) =>{
        return c.name.toLocaleLowerCase().indexOf(data.toLowerCase()) > -1 ||
        c.city.toLocaleLowerCase().indexOf(data.toLowerCase()) > -1 ||
        c.orderTotal.toString().indexOf(data) > -1;
      });
    }else{
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string){
    this.sorterService.sort(this.filteredCustomers,prop);
  }
}
