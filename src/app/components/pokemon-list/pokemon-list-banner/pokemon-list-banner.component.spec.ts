import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListBannerComponent } from './pokemon-list-banner.component';

describe('PokemonListBannerComponent', () => {
  let component: PokemonListBannerComponent;
  let fixture: ComponentFixture<PokemonListBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonListBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
