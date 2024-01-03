import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessListComponent } from './components/fitness-list/fitness-list.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { FitnessDetailsComponent } from './components/fitness-details/fitness-details.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FitnessListAdminComponent } from './components/fitness-list-admin/fitness-list-admin.component';
import { FitnessDetailsAdminComponent } from './components/fitness-details-admin/fitness-details-admin.component';
import { FitnessDetailsAdminResolver } from './resolver/fitness-details-admin.resolver';
import { ExercisesListAdminComponent } from './components/exercises-list-admin/exercises-list-admin.component';
import { ExerciseDetailsAdminComponent } from './components/exercise-details-admin/exercise-details-admin.component';
import { ExerciseDetailsAdminResolver } from './resolver/exercise-details-admin.resolver';

const routes: Routes = [
  { path: "fitnessList", component: FitnessListComponent },
  { path: "clientsList", component: ClientsListComponent },
  { path: "fitness/:id", component: FitnessDetailsComponent },
  { path: "exercisesList", component: ExercisesListComponent },
  { path: "exercise/:id", component: ExerciseDetailsComponent },
  { path: "admin/fitnessList", component: FitnessListAdminComponent },
  { path: "admin/exercisesList", component: ExercisesListAdminComponent },
  {
    path: "admin/fitnessDetails/:mode/:id", component: FitnessDetailsAdminComponent, 
    resolve: {
      data: FitnessDetailsAdminResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/exerciseDetails/:mode/:id", component: ExerciseDetailsAdminComponent, 
    resolve: {
      data: ExerciseDetailsAdminResolver
    },
    runGuardsAndResolvers: 'always'
  },

  { path: "error", component: ErrorPageComponent },
  { path: '', redirectTo: '/fitnessList', pathMatch: 'full' }, // Default redirect to 'client'
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
