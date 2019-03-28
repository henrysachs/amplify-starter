import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NutritionTableComponent } from './nutrition-table/nutrition-table.component';
import { TreeComponent } from './tree/tree.component';
import { AddressFormComponent } from './address-form/address-form.component';

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
  { path: '',
    redirectTo: '/dashboard',
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
