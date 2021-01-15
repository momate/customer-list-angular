import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CustomersComponent, CustomersListComponent],
  imports: [
    CommonModule,
  ]
})
export class CustomersModule { }
