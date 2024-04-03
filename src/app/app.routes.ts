import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GymCardsComponent } from './components/gym-cards/gym-cards.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';

export const routes: Routes = [
    {path:'',component:GymCardsComponent},
    {
        path: 'gym/:id', component:TrainerListComponent
    }
];
