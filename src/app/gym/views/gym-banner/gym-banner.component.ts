import { Component, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-gym-banner',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './gym-banner.component.html',
  styleUrl: './gym-banner.component.css'
})
export class GymBannerComponent {
  @Input() newGymName!: string;
  // @ts-ignore
  @Input() submitForm(): void

}
