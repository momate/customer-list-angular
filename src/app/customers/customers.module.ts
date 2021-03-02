import { CustomerAdderRoutingModule } from './customer-adder/customer-adder-routing.module';
import { CustomerAdderComponent } from './customer-adder/customer-adder.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent, CustomerAdderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    CustomerAdderRoutingModule,
    ReactiveFormsModule,

    ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
