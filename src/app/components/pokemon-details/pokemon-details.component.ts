import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonServiceService } from '../../pokemon-service.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any = {};

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonServiceService
  ) {}

  ngOnInit(): void {
    // Get the Pokemon ID from route parameters
    this.route.paramMap.subscribe((params) => {
      const pokemonId = params.get('id');
      if (pokemonId) {
        // Fetch the Pokemon details based on the ID
        this.pokemonService.getPokemonById(pokemonId).subscribe((pokemon) => {
          this.pokemon = pokemon;
        });
      }
    });
  }
}
