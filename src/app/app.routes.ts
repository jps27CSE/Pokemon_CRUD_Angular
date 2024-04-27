import { Routes } from "@angular/router";
import { GymCardsContainerComponent } from "./gym/containers/gym-cards-container/gym-cards-container.component";
import { AboutComponent } from "./components/about/about.component";
import { GymCardEditContainerComponent } from "./gym/containers/gym-card-edit-container/gym-card-edit-container.component";
import {PokemonDetailsComponent} from "./components/pokemon-details/pokemon-details.component";
import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {PokemonCardEditComponent} from "./components/pokemon-card-edit/pokemon-card-edit.component";

export const routes: Routes = [
  { path: "", component: GymCardsContainerComponent },
  {
    path: "trainer",
    loadChildren: () =>
      import("./trainer/trainer.routes").then((c) => c.trainerRoutes)
  },
  // {
  //   path: "pokemon",
  //   loadChildren: () =>
  //     import("./pokemon/pokemon.routes").then((c) => c.pokemonRoutes)
  // },

  // {
  //   path: 'gym/:id',
  //   component: TrainerListContainerComponent,
  // },
  {
    path: "gym/edit/:id",
    component: GymCardEditContainerComponent
  },

  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'pokemon-list',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon-edit/:id',
    component: PokemonCardEditComponent,
  },
];
