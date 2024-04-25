import {Component, Input, OnInit} from '@angular/core';
import { GymServiceService } from '../../../services/gym-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonServiceService } from '../../../services/pokemon-service.service';
import { TrainerService } from '../../../services/trainer.service';
import { Router } from '@angular/router';
import { TrainerFormComponent } from '../../views/trainer-form/trainer-form.component';

@Component({
  selector: 'app-trainer-create-container',
  standalone: true,
  templateUrl: './trainer-create-container.component.html',
  styleUrl: './trainer-create-container.component.css',
  imports: [CommonModule, FormsModule, TrainerFormComponent],
})
export class TrainerCreateContainerComponent implements OnInit {
  formType: string ='create'
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
    this.gymService.getAllGyms().subscribe((gyms:any) => {
      this.gyms = gyms;
    });

    this.pokemonService.getAllPokemons().subscribe((pokemons:any) => {
      this.pokemons = pokemons;
    });
  }

  onCreateTrainer(event: any) {
    this.trainerService.saveTrainer(event).subscribe(
      (response) => {
        console.log('New trainer created:', response);

        this.router.navigate(['trainer/list']);
      },
      (error) => {
        console.error('Error creating trainer:', error);
      }
    );
  }

  // addPokemon(selectedPokemonId: string) {
  //   if (selectedPokemonId && !this.selectedPokemonId) {
  //     this.selectedPokemonId = selectedPokemonId;
  //   }
  // }

  // addGym(selectedGymId: string) {
  //   if (selectedGymId && !this.selectedGymId) {
  //     this.selectedGymId = selectedGymId;
  //   }
  // }
}
