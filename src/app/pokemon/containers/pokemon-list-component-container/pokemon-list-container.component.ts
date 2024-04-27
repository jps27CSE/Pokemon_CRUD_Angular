import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../../services/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonListBannerContainerComponent } from '../pokemon-list-banner-container/pokemon-list-banner-container.component';
import { PokemonCardComponent } from '../../views/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonListBannerContainerComponent, PokemonCardComponent],
  templateUrl: './pokemon-list-container.component.html',
  styleUrls: ['./pokemon-list-container.component.css'],
})
export class PokemonListContainerComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
