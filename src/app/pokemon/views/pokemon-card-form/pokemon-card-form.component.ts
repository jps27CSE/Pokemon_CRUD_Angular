import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-pokemon-card-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './pokemon-card-form.component.html',
  styleUrl: './pokemon-card-form.component.css'
})
export class PokemonCardFormComponent {
  @Input() submitForm!: () => void;
  @Input() pokemonId!: string;
  @Input() updatedPokemon!: any;
  @Input() deletePokemon!: () => void;

}
