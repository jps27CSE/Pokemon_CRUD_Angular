import { Routes } from "@angular/router";
import {AboutComponent} from "./components/about/about.component";
export const routes: Routes = [
  {
    path: "trainer",
    loadChildren: () =>
      import("./trainer/trainer.routes").then((c) => c.trainerRoutes)
  },
  {
    path:'',
    loadChildren:()=>
      import('./gym/gym.routes').then((c)=>c.gymRoutes)
  },
  {
    path:'pokemon',
    loadChildren:()=>
      import('./pokemon/pokemon.routes').then((c)=>c.pokemonRoutes)
  },


  {
    path: "about",
    component: AboutComponent
  },
];
