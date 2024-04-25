import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../../services/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-list-banner.component.html',
  styleUrl: './pokemon-list-banner.component.css',
})
export class PokemonListBannerComponent implements OnInit {
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

    console.log('Submitted Pokemon Name:', this.newPokemonName);
    console.log('Submitted Pokemon Type:', this.newPokemonType);
    console.log('Submitted Pokemon Level:', this.newPokemonLevel);
    console.log('Submitted Pokemon Species:', this.newPokemonSpecies);

    this.newPokemonName = '';
    this.newPokemonType = '';
    this.newPokemonLevel = 0;
    this.newPokemonSpecies = '';
  }
}
