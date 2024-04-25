import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainer-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainer-form.component.html',
  styleUrl: './trainer-form.component.css',
})
export class TrainerFormComponent implements OnInit {
  gyms: any[] = [];
  selectedGymId: string = '';
  pokemons: any[] = [];
  selectedPokemonId: string = '';
  trainerName: string = '';
  badge: string = '';

  @Output() createTrainer = new EventEmitter<any>();
  @Input() pageType!: string;

  ngOnInit(): void {}

  onSubmitForm() {
    const newData = {
      name: this.trainerName,
      badge: this.badge,
      pokemonIds: [parseInt(this.selectedPokemonId, 10)],
      gymIds: [parseInt(this.selectedGymId, 10)],
    };

    this.createTrainer.emit(newData);
  }
}
