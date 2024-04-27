import { GymCardsContainerComponent } from "./containers/gym-cards-container/gym-cards-container.component";
import { GymCardEditContainerComponent } from "./containers/gym-card-edit-container/gym-card-edit-container.component";

export const gymRoutes = [
  {path:'', component: GymCardsContainerComponent},
  {
    path: 'cards', component: GymCardsContainerComponent
  },
  {
    path: 'edit', component:GymCardEditContainerComponent
  },
];
