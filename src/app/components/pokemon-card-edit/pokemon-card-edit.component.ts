import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pokemon-card-edit.component.html',
  styleUrl: './pokemon-card-edit.component.css',
})
export class PokemonCardEditComponent implements OnInit {
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
