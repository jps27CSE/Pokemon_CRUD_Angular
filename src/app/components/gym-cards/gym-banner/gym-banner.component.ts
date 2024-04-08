import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GymServiceService } from '../../../gym-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-banner',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gym-banner.component.html',
  styleUrl: './gym-banner.component.css',
})
export class GymBannerComponent implements OnInit {
  newGymName: string = '';

  constructor(private gymService: GymServiceService, private router: Router) {}

  submitForm() {
    const newName = {
      name: this.newGymName,
    };

    this.gymService.SaveGym(newName).subscribe(
      (response) => {
        console.log('New gym created:', response);
        location.reload();
        this.router.navigate(['/gyms']);
      },
      (error) => {
        console.error('Error creating gym:', error);
      }
    );

    console.log('Submitted Gym Name:', this.newGymName);

    this.newGymName = '';
  }

  ngOnInit(): void {}
}
