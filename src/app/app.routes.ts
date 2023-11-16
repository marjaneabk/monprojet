import { Routes } from '@angular/router';
import {ComposantRouteurComponent} from "./composant-routeur/composant-routeur.component";
import {CalculetteComponent} from "./calculette/calculette.component";

export const routes: Routes = [
  { path:'login', component: ComposantRouteurComponent},
  { path: 'calculette', component:ComposantRouteurComponent}
]
