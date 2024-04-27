import {
  PokemonListContainerComponent
} from "./containers/pokemon-list-component-container/pokemon-list-container.component";
import {
  PokemonCardEditContainerComponent
} from "./containers/pokemon-card-edit-container/pokemon-card-edit-container.component";
import { PokemonDetailsContainerComponent } from "./containers/pokemon-details-container/pokemon-details-container.component";

export const pokemonRoutes = [
  {path:'',component: PokemonListContainerComponent},
  {
    path: 'pokemon-list',
    component: PokemonListContainerComponent,
  },
  {
    path: 'edit/:id',
    component: PokemonCardEditContainerComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsContainerComponent,
  },
];
