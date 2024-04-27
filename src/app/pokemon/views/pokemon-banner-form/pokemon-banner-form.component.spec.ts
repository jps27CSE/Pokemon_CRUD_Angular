import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBannerFormComponent } from './pokemon-banner-form.component';

describe('PokemonBannerFormComponent', () => {
  let component: PokemonBannerFormComponent;
  let fixture: ComponentFixture<PokemonBannerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonBannerFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonBannerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
