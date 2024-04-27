import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonServiceService } from '../../../services/pokemon-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonCardFormComponent } from "../../views/pokemon-card-form/pokemon-card-form.component";

@Component({
  selector: 'app-pokemon-card-edit-container',
  standalone: true,
  imports: [FormsModule, CommonModule, PokemonCardFormComponent],
  templateUrl: './pokemon-card-edit-container.component.html',
  styleUrl: './pokemon-card-edit-container.component.css',
})
export class PokemonCardEditContainerComponent implements OnInit {
  updatedPokemon: any = {
    name: '',
    type: '',
    level: 0,
    species: '',
  };
  pokemonId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pokemonId = params['id'];
      this.getPokemonDetails(this.pokemonId);
    });
  }

  getPokemonDetails(id: string) {
    this.pokemonService.getPokemonById(id).subscribe((pokemon) => {
      this.updatedPokemon = pokemon;
    });
  }

  submitForm() {
    this.pokemonService
      .updatePokemon(this.pokemonId, this.updatedPokemon)
      .subscribe(
        (response) => {
          console.log('Pokemon updated:', response);
          this.router.navigate(['/pokemon-list']);
        },
        (error) => {
          console.error('Error updating Pokemon:', error);
        }
      );
  }

  deletePokemon() {
    this.pokemonService.deletePokemon(this.pokemonId).subscribe(
      (response) => {
        console.log('Pokemon deleted:', response);
        this.router.navigate(['/pokemon-list']);
      },
      (error) => {
        console.error('Error deleting Pokemon:', error);
      }
    );
  }
}
