import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRegistrationFormComponent } from './trainer-registration-form.component';

describe('TrainerRegistrationFormComponent', () => {
  let component: TrainerRegistrationFormComponent;
  let fixture: ComponentFixture<TrainerRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainerRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
