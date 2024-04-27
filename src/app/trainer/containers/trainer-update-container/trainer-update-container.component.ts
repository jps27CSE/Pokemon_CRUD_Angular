import {Component, OnInit} from '@angular/core';
import {TrainerFormComponent} from "../../views/trainer-form/trainer-form.component";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainerService} from "../../../services/trainer.service";


@Component({
  selector: 'app-trainer-update-container',
  standalone: true,
  imports: [TrainerFormComponent],
  templateUrl: './trainer-update-container.component.html',
  styleUrl: './trainer-update-container.component.css'
})
export class TrainerUpdateContainerComponent  implements  OnInit {
  formType:string = 'edit'
  trainerId:string = ''
  trainerDetails :any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trainerService: TrainerService

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.trainerId = params['id'];
      this.getTrainerDetails(this.trainerId);

    });

    console.log(this.trainerDetails)
  }

  getTrainerDetails(id: string) {
    this.trainerService.getTrainer().subscribe((trainer:any) => {
      this.trainerDetails = trainer;
    });
  }
}
