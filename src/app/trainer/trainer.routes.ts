import { TrainerCreateContainerComponent } from './containers/trainer-create-container/trainer-create-container.component';
import { TrainerTableContainerComponent } from './containers/trainer-table-container/trainer-table-container.component';
import {
  TrainerUpdateContainerComponent
} from "./containers/trainer-update-container/trainer-update-container.component";

export const trainerRoutes = [
  { path: '', component: TrainerTableContainerComponent },

  {
    path: 'create',
    component: TrainerCreateContainerComponent,
  },
  {
    path: 'list',
    component: TrainerTableContainerComponent,
  },
  {
    path:'update/:id',
    component: TrainerUpdateContainerComponent,
  }
];
