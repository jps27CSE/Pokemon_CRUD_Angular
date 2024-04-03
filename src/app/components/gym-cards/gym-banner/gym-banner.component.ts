import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gym-banner',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gym-banner.component.html',
  styleUrl: './gym-banner.component.css',
})
export class GymBannerComponent implements OnInit {
  newGymName: string = '';

  submitForm() {
    console.log('Submitted Gym Name:', this.newGymName);

    this.newGymName = '';
  }

  ngOnInit(): void {}
}
