import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GymServiceService } from '../../../services/gym-service.service';
import { Router } from '@angular/router';
import { GymBannerComponent } from "../../views/gym-banner/gym-banner.component";

@Component({
  selector: 'app-gym-banner-container',
  standalone: true,
  imports: [FormsModule, GymBannerComponent],
  templateUrl: './gym-banner-container.component.html',
  styleUrl: './gym-banner-container.component.css',
})
export class GymBannerContainerComponent implements OnInit {
  newGymName: string = '';

  constructor(private gymService: GymServiceService, private router: Router) {}

  submitForm() {
    const newName = {
      name: this.newGymName,
    };

    this.gymService.SaveGym(newName).subscribe(
      (response) => {
        window.location.reload();
        this.router.navigate(['/gyms']);
      },
      (error) => {
        console.error('Error creating gym:', error);
      }
    );
    this.newGymName = '';
  }

  ngOnInit(): void {}
}
