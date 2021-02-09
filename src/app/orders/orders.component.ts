import { CustomerService } from './../core/customer.service';
import { Order, Customer } from './../shared/interfaces';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  customer: Customer;

  constructor(private customerService: CustomerService,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    this.customerService.getOrdersByCustomerId(id).subscribe((orders: Order[]) =>{
      this.orders = orders;
    });

    this.customerService.getCustomerById(id).subscribe((customer: Customer) =>{
    this.customer = customer;
    });
  }

}
