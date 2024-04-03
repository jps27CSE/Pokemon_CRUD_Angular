import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymBannerComponent } from './gym-banner.component';

describe('GymBannerComponent', () => {
  let component: GymBannerComponent;
  let fixture: ComponentFixture<GymBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
