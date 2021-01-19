import { Customer } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  constructor() { }

  //TODO: Should be an REST API what gives the data

  getCustomers(): Observable<Customer[]>{

    return null;
  }

  getCustomerById(id: number): Observable<Customer>{
    return null;
  } 


}
