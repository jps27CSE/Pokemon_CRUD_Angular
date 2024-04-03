import { Component, OnInit } from '@angular/core';
import { GymCardComponent } from './gym-card/gym-card.component';
import { GymServiceService } from '../../gym-service.service';
import { GymBannerComponent } from './gym-banner/gym-banner.component';

@Component({
  selector: 'app-gym-cards',
  standalone: true,
  imports: [GymCardComponent, GymBannerComponent],
  templateUrl: './gym-cards.component.html',
  styleUrl: './gym-cards.component.css',
})
export class GymCardsComponent implements OnInit {
  gyms: any[] = [];

  constructor(private gymService: GymServiceService) {}

  ngOnInit(): void {
    this.gymService.getAllGyms().subscribe((gyms) => {
      this.gyms = gyms;
      console.log(this.gyms);
    });
  }
}
