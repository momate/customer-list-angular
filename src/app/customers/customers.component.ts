import { CustomerService } from './../core/customer.service';
import { Customer } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: Customer[];
  error: string;


  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this.title = 'Customers';
    this._customerService.getCustomers()
        .subscribe((customers: Customer[]) => { 
          this.people = customers 
        }, (error) =>{
            this.error = error;
          });
  }

}
