import { Component, OnInit } from '@angular/core';
import { GymServiceService } from '../../gym-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonServiceService } from '../../pokemon-service.service';
import { TrainerService } from '../../trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.css',
})
export class TrainerCreateComponent implements OnInit {
  gyms: any[] = [];
  selectedGymId: string = '';
  pokemons: any[] = [];
  selectedPokemonId: string = '';
  trainerName: string = '';
  badge: string = '';

  constructor(
    private gymService: GymServiceService,
    private pokemonService: PokemonServiceService,
    private trainerService: TrainerService,
    private router: Router
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
    console.log('Selected Gym:', this.selectedGymId);
    console.log('Selected Pokemon:', this.selectedPokemonId);

    const newData = {
      name: this.trainerName,
      badge: this.badge,
      pokemonIds: [parseInt(this.selectedPokemonId, 10)],
      gymIds: [parseInt(this.selectedGymId, 10)],
    };

    this.trainerService.saveTrainer(newData).subscribe(
      (response) => {
        console.log('New trainer created:', response);

        this.router.navigate(['trainer']);
      },
      (error) => {
        console.error('Error creating trainer:', error);
      }
    );
  }

  addPokemon(selectedPokemonId: string) {
    if (selectedPokemonId && !this.selectedPokemonId) {
      this.selectedPokemonId = selectedPokemonId;
    }
  }

  addGym(selectedGymId: string) {
    if (selectedGymId && !this.selectedGymId) {
      this.selectedGymId = selectedGymId;
    }
  }
}
