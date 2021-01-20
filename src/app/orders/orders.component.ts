import { CustomerService } from './../core/customer.service';
import { Order, Customer } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerById(id).subscribe((customer: Customer) =>{
    this.customer = customer;
    });
  }

}
