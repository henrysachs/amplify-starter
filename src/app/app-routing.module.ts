import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NutritionTableComponent } from './nutrition-table/nutrition-table.component';
import { TreeComponent } from './tree/tree.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'My Activities' }
  },
  {
    path: 'profile',
    component : ProfileComponent,
    data: {title: 'Profile'}
  },
  {
    path: 'login',
    component : LoginComponent,
    data: {title: 'Login'}
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'nutrition',
    component : NutritionTableComponent,
    data: {title: 'Nutrition Table'}
  },
  {
    path: 'tree',
    component : TreeComponent,
    data: {title: 'Tree'}
  },
  {
    path: 'address',
    component : AddressFormComponent,
    data: {title: 'Tree'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
