import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GymCardsComponent } from './components/gym-cards/gym-cards.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerTableComponent } from './components/trainer-table/trainer-table.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { AboutComponent } from './components/about/about.component';
import { GymCardEditComponent } from './components/gym-cards/gym-card-edit/gym-card-edit.component';

export const routes: Routes = [
  { path: '', component: GymCardsComponent },
  {
    path: 'gym/:id',
    component: TrainerListComponent,
  },
  {
    path: 'gym/edit/:id',
    component: GymCardEditComponent,
  },
  {
    path: 'trainer/:id',
    component: TrainerTableComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
