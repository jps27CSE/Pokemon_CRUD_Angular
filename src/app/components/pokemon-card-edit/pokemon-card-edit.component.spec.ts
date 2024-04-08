import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardEditComponent } from './pokemon-card-edit.component';

describe('PokemonCardEditComponent', () => {
  let component: PokemonCardEditComponent;
  let fixture: ComponentFixture<PokemonCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
