import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FishesComponent } from './fishes/fishes.component';
import { FishDetailComponent } from './fish-detail/fish-detail.component';
import { FishAddComponent } from './fish-add/fish-add.component';
import { FishEditComponent } from './fish-edit/fish-edit.component';

const routes: Routes = [
  {
    path: 'fishes',
    component: FishesComponent,
    data: { title: 'List of Fishes' }
  },
  {
    path: 'fish-detail/:id',
    component: FishDetailComponent,
    data: { title: 'Fish Details' }
  },
  {
    path: 'fish-add',
    component: FishAddComponent,
    data: { title: 'Add Fish' }
  },
  {
    path: 'fish-edit/:id',
    component: FishEditComponent,
    data: { title: 'Edit fish' }
  },
  { path: '',
    redirectTo: '/fishes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
