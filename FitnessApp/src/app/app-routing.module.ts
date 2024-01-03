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
import { ClientsListAdminComponent } from './components/clients-list-admin/clients-list-admin.component';
import { ClientDetailsAdminComponent } from './components/client-details-admin/client-details-admin.component';
import { ClientDetailsAdminResolver } from './resolver/client-details-admin.resolver';
import { LoginComponent } from './components/login/login.component';
import { LoginResolver } from './resolver/login.resolver';
import { RedirectResolver } from './resolver/redirect.resolver';

const routes: Routes = [
  {
    path: "fitnessList", component: FitnessListComponent,
    resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "clientsList", component: ClientsListComponent,
    resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "fitness/:id", component: FitnessDetailsComponent,
    resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "exercisesList", component: ExercisesListComponent,
    resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "exercise/:id", component: ExerciseDetailsComponent,
    resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/fitnessList", component: FitnessListAdminComponent,
    resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/exercisesList", component: ExercisesListAdminComponent, resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/clientsList", component: ClientsListAdminComponent, resolve: {
      data: RedirectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/fitnessDetails/:mode/:id", component: FitnessDetailsAdminComponent,
    resolve: {
      resolver: RedirectResolver,
      data: FitnessDetailsAdminResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/clientDetails/:mode/:id", component: ClientDetailsAdminComponent,
    resolve: {
      resolver: RedirectResolver,
      data: ClientDetailsAdminResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/exerciseDetails/:mode/:id", component: ExerciseDetailsAdminComponent,
    resolve: {
      resolver: RedirectResolver,
      data: ExerciseDetailsAdminResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "login", component: LoginComponent,
    resolve: {
      data: LoginResolver
    },
    runGuardsAndResolvers: 'always'
  },


  { path: "error", component: ErrorPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default redirect to 'client'
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
