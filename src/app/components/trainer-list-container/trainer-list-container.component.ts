import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trainer-list-container',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trainer-list-container.component.html',
  styleUrl: './trainer-list-container.component.css',
})
export class TrainerListContainerComponent {}
