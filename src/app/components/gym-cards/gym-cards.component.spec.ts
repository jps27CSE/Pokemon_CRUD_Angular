import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCardsComponent } from './gym-cards.component';

describe('GymCardsComponent', () => {
  let component: GymCardsComponent;
  let fixture: ComponentFixture<GymCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
