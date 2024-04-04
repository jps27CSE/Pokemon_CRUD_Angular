import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCardEditComponent } from './gym-card-edit.component';

describe('GymCardEditComponent', () => {
  let component: GymCardEditComponent;
  let fixture: ComponentFixture<GymCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymCardEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
