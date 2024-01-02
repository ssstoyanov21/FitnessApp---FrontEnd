import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessListComponent } from './components/fitness-list/fitness-list.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { FitnessDetailsComponent } from './components/fitness-details/fitness-details.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: "fitnessList", component: FitnessListComponent },
  { path: "clientsList", component: ClientsListComponent },
  { path: "fitness/:id", component: FitnessDetailsComponent },
  { path: "exercisesList", component: ExercisesListComponent },
  { path: "exercise/:id", component: ExerciseDetailsComponent },
  { path: "error", component: ErrorPageComponent },
  { path: '', redirectTo: '/fitnessList', pathMatch: 'full' }, // Default redirect to 'client'
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
