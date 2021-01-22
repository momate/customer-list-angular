import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
    ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
