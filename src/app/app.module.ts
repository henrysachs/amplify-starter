import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { NutritionTableComponent } from './nutrition-table/nutrition-table.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    DashboardComponent,
    ProfileComponent,
    AddressFormComponent,
    TreeComponent,
    NutritionTableComponent,
    LoginComponent,
    FlipCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    AmplifyAngularModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
