import { Customer } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class CustomerService {

  private _baseUrl: string = "/assets/data/";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{

    return this.http.get<Customer[]>(this._baseUrl + 'customers.json');
        
  }

  getCustomerById(id: number): Observable<Customer>{
     return this.http.get<Customer[]>(this._baseUrl + 'customer.json')
        .pipe(
          map(customers =>{
            let customer = customers.filter((c: Customer) => c.id === id);
            return customer[0];
          })
        );
  } 


}
