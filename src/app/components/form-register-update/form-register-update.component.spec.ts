import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterUpdateComponent } from './form-register-update.component';

describe('FormRegisterUpdateComponent', () => {
  let component: FormRegisterUpdateComponent;
  let fixture: ComponentFixture<FormRegisterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
