import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-pokemon-banner-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './pokemon-banner-form.component.html',
  styleUrl: './pokemon-banner-form.component.css'
})
export class PokemonBannerFormComponent {
  @Input() submitForm!: () => void;
  @Input() pokemons!: any[];
  @Input() newPokemonName!: string;
  @Input() newPokemonType!: string;
  @Input() newPokemonLevel!: number;
  @Input() newPokemonSpecies!: string;

}
