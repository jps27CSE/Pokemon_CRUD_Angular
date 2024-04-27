import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../../services/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonBannerFormComponent } from "../../views/pokemon-banner-form/pokemon-banner-form.component";

@Component({
  selector: 'app-pokemon-list-banner-container',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonBannerFormComponent],
  templateUrl: './pokemon-list-banner-container.component.html',
  styleUrl: './pokemon-list-banner-container.component.css',
})
export class PokemonListBannerContainerComponent implements OnInit {
  pokemons: any[] = [];
  newPokemonName: string = '';
  newPokemonType: string = '';
  newPokemonLevel: number = 0;
  newPokemonSpecies: string = '';

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  submitForm() {
    const newPokemon = {
      name: this.newPokemonName,
      type: this.newPokemonType,
      level: this.newPokemonLevel,
      species: this.newPokemonSpecies,
    };

    this.pokemonService.savePokemon(newPokemon).subscribe(
      (response) => {
        console.log('New Pokemon added:', response);
        window.location.reload();
      },
      (error) => {
        console.error('Error adding Pokemon:', error);
      }
    );

    this.newPokemonName = '';
    this.newPokemonType = '';
    this.newPokemonLevel = 0;
    this.newPokemonSpecies = '';
  }
}
