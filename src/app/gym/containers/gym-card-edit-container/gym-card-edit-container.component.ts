import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GymServiceService } from '../../../services/gym-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GymBannerFormComponent } from "../../views/gym-banner-form/gym-banner-form.component";

@Component({
  selector: 'app-gym-card-edit-container',
  standalone: true,
  imports: [CommonModule, FormsModule, GymBannerFormComponent],
  templateUrl: './gym-card-edit-container.component.html',
  styleUrl: './gym-card-edit-container.component.css',
})
export class GymCardEditContainerComponent implements OnInit {
  userID!: number;
  gym: any = {};
  UpdatedGym = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gymService: GymServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userID = +params['id'];
      this.gymService.getSpecificGym(this.userID).subscribe((gym) => {
        this.gym = gym;
        console.log(this.gym);
      });
    });
  }

  submitForm() {
    const data = {
      name: this.UpdatedGym,
    };
    this.gymService.EditGym(this.userID, data).subscribe(
      (response) => {
        console.log('Updated gym ', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error creating gym:', error);
      }
    );
  }

  deleteGym() {
    this.gymService.DeleteGym(this.userID).subscribe(
      (response) => {
        console.log('Deleted Successfully', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error ', error);
      }
    );
  }
}
