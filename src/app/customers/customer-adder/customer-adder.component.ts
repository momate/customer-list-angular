import { CustomerService } from './../../core/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-adder',
  templateUrl: './customer-adder.component.html',
  styleUrls: ['./customer-adder.component.css']
})
export class CustomerAdderComponent implements OnInit {

   addForm: FormGroup;

  constructor(private _service: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.addForm = formBuilder.group({
      name: ["", Validators.required],
      city: ["", Validators.required]
  });
   }

  ngOnInit(): void {
  }

  add(){
    this._service.addCustomer(this.addForm.get('name').value,
    this.addForm.get('city').value);
    this.router.navigate(['/customers']);
  }

}
