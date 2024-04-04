import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trainer-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trainer-table.component.html',
  styleUrl: './trainer-table.component.css',
})
export class TrainerTableComponent {}
