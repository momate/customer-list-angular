import { SorterService } from './sorter.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './customer.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CustomerService, SorterService]
})
export class CoreModule { }
