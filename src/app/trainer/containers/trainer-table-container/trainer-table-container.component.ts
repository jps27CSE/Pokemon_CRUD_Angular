import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../../services/trainer.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from "../../views/trainer-list/trainer-list.component";

@Component({
    selector: 'app-trainer-table-container',
    standalone: true,
    templateUrl: './trainer-table-container.component.html',
    styleUrls: ['./trainer-table-container.component.css'],
    imports: [RouterLink, CommonModule, TrainerListComponent]
})
export class TrainerTableContainerComponent implements OnInit {
  trainers: any[] = [];

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.fetchTrainers();
  }

  fetchTrainers() {
    this.trainerService.getTrainer().subscribe(
      (data) => {
        this.trainers = data;
        console.log(this.trainers);
      },
      (error) => {
        console.error('Error fetching trainers:', error);
      }
    );
  }

  deleteTrainer(trainer: any) {
    if (!trainer || !trainer.id) {
      console.error('Invalid trainer object or ID:', trainer);
      return;
    }

    if (confirm('Are you sure you want to delete this trainer?')) {
      this.trainerService.deleteTrainer(trainer.id).subscribe(
        () => {
          console.log('Trainer deleted successfully');
          this.fetchTrainers();
        },
        (error) => {
          console.error('Error deleting trainer:', error);
        }
      );
    }
  }
}
