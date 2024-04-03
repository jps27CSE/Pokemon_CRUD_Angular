import { Component } from '@angular/core';
import { GymCardComponent } from './gym-card/gym-card.component';

@Component({
  selector: 'app-gym-cards',
  standalone: true,
  imports: [GymCardComponent],
  templateUrl: './gym-cards.component.html',
  styleUrl: './gym-cards.component.css'
})
export class GymCardsComponent {

}
