import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../pokemon-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonListBannerComponent } from './pokemon-list-banner/pokemon-list-banner.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonListBannerComponent, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
