import { Customer, Order } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable()
export class CustomerService {

  private _baseUrl: string = "/assets/data/";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{

    return this.http.get<Customer[]>(this._baseUrl + 'customers.json')
            .pipe(
              catchError(this.errorHandler)
              );
  }

  getCustomerById(id: number): Observable<Customer>{
     return this.http.get<Customer[]>(this._baseUrl + 'customers.json')
        .pipe(
          map(customers =>{
            let customer = customers.filter((c: Customer) => c.id === id);
            return customer[0];
          }),
          catchError(this.errorHandler)
        );
  }

  getOrdersByCustomerId(id: number): Observable<Order[]>{
    return this.http.get<Order[]>(this._baseUrl + 'orders.json')
          .pipe(
            map(orders =>{
              let customerOrders = orders.filter((o: Order) => o.customerId === id);
              return customerOrders;
            }),
            catchError(this.errorHandler)
          );
  }

  addCustomer(name: string, city: string){
      //save the customer
  }

  errorHandler(error: any){
    return throwError(error.message || "Server Error");
  }


}
