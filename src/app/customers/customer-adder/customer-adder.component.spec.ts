import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdderComponent } from './customer-adder.component';

describe('CustomerAdderComponent', () => {
  let component: CustomerAdderComponent;
  let fixture: ComponentFixture<CustomerAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
