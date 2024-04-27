import { Component, OnInit } from '@angular/core';
import { GymCardComponent } from '../../views/gym-card/gym-card.component';
import { GymServiceService } from '../../../services/gym-service.service';
import { GymBannerContainerComponent } from '../gym-banner-container/gym-banner-container.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-gym-cards',
  standalone: true,
  imports: [GymCardComponent, GymBannerContainerComponent, CommonModule,],
  templateUrl: './gym-cards-container.component.html',
  styleUrl: './gym-cards-container.component.css',
})
export class GymCardsContainerComponent implements OnInit {
  gyms: any[] = [];

  constructor(private gymService: GymServiceService) {}

  ngOnInit(): void {
    this.gymService.getAllGyms().subscribe((gyms) => {
      this.gyms = gyms;
      console.log(this.gyms);
    });
  }
}
