import { Component, OnInit } from '@angular/core';
import { GymServiceService } from '../../gym-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonServiceService } from '../../pokemon-service.service';

@Component({
  selector: 'app-trainer-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.css',
})
export class TrainerCreateComponent implements OnInit {
  gyms: any[] = [];
  selectedGymIds: string[] = [];
  pokemons: any[] = [];
  selectedPokemonIds: string[] = [];
  trainerName: string = '';

  constructor(
    private gymService: GymServiceService,
    private pokemonService: PokemonServiceService
  ) {}

  ngOnInit(): void {
    this.gymService.getAllGyms().subscribe((gyms) => {
      this.gyms = gyms;
    });

    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  submitForm() {
    console.log('Trainer Name:', this.trainerName);
    console.log('Selected Gyms:', this.selectedGymIds);
    console.log('Selected Pokemons:', this.selectedPokemonIds);
    // Submit logic here
  }

  addPokemon(selectedPokemonIds: string[]) {
    selectedPokemonIds.forEach((id) => {
      if (!this.selectedPokemonIds.includes(id)) {
        this.selectedPokemonIds.push(id);
      }
    });
  }

  addGym(selectedGymIds: string[]) {
    selectedGymIds.forEach((id) => {
      if (!this.selectedGymIds.includes(id)) {
        this.selectedGymIds.push(id);
      }
    });
  }
}
