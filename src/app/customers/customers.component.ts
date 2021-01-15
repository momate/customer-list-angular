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


  constructor() { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.people = [
    { id: 1, name: 'Tom Tom', city: 'Amsterdam', orderTotal: 9.99},
    { id: 2, name: 'Don Don', city: 'Los Angeles', orderTotal: 19.99},
    { id: 3, name: 'Fon Fon', city: 'London', orderTotal: 99.99},
    { id: 4, name: 'Tin Tin', city: 'New York', orderTotal: 299.99},
];

  }

}
