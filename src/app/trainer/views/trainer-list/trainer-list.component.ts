import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-trainer-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.css',
})
export class TrainerListComponent {
  @Input() trainers!: any[];
}
