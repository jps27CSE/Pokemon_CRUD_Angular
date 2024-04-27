import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-gym-banner-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './gym-banner-form.component.html',
  styleUrl: './gym-banner-form.component.css'
})
export class GymBannerFormComponent {
  @Input() userID!: number;
  @Input() gym!: any;
  @Input() UpdatedGym!: string;
  @Input() deleteGym!: () => void;
  @Input() submitForm(): void {};

}
