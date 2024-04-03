import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gym-banner',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gym-banner.component.html',
  styleUrl: './gym-banner.component.css',
})
export class GymBannerComponent {
  newGymName: string = '';

  submitForm() {
    console.log('hello from modal');
    this.newGymName = '';
    console.log(this.newGymName);
  }
}
