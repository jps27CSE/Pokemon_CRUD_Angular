import { Routes } from "@angular/router";
import { GymCardsComponent } from "./components/gym-cards/gym-cards.component";
import { AboutComponent } from "./components/about/about.component";
import { GymCardEditComponent } from "./components/gym-cards/gym-card-edit/gym-card-edit.component";

export const routes: Routes = [
  { path: "", component: GymCardsComponent },

  {
    path: "trainer",
    loadChildren: () =>
      import("./trainer/trainer.routes").then((c) => c.trainerRoutes)
  },
  {
    path: "pokemon",
    loadChildren: () =>
      import("./pokemon/pokemon.routes").then((c) => c.pokemonRoutes)
  },

  // {
  //   path: 'gym/:id',
  //   component: TrainerListContainerComponent,
  // },
  {
    path: "gym/edit/:id",
    component: GymCardEditComponent
  },

  // {
  //   path: 'pokemon/:id',
  //   component: PokemonDetailsComponent,
  // },
  {
    path: "about",
    component: AboutComponent
  }
  // {
  //   path: 'pokemon-list',
  //   component: PokemonListComponent,
  // },
  // {
  //   path: 'pokemon-edit/:id',
  //   component: PokemonCardEditComponent,
  // },
];
