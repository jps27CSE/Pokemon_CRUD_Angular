import { Routes } from "@angular/router";
import { GymCardsContainerComponent } from "./gym/containers/gym-cards-container/gym-cards-container.component";
import { AboutComponent } from "./components/about/about.component";
import { GymCardEditContainerComponent } from "./gym/containers/gym-card-edit-container/gym-card-edit-container.component";
import {PokemonDetailsContainerComponent} from "./pokemon/containers/pokemon-details-container/pokemon-details-container.component";
import {PokemonListContainerComponent} from "./pokemon/containers/pokemon-list-component-container/pokemon-list-container.component";
import {PokemonCardEditContainerComponent} from "./pokemon/containers/pokemon-card-edit-container/pokemon-card-edit-container.component";

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
    component: PokemonDetailsContainerComponent,
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'pokemon-list',
    component: PokemonListContainerComponent,
  },
  {
    path: 'pokemon-edit/:id',
    component: PokemonCardEditContainerComponent,
  },
];
