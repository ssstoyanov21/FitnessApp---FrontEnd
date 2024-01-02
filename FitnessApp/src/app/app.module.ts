import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FitnessListComponent } from './components/fitness-list/fitness-list.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { FitnessDetailsComponent } from './components/fitness-details/fitness-details.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FitnessListComponent,
    ClientsListComponent,
    FitnessDetailsComponent,
    ExercisesListComponent,
    ExerciseDetailsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
