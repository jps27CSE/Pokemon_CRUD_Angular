import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [],
  templateUrl: './gym-card.component.html',
  styleUrl: './gym-card.component.css',
})
export class GymCardComponent implements OnInit {
  @Input() gym_data!: any;
  ngOnInit(): void {
    console.log(this.gym_data);
  }
}
