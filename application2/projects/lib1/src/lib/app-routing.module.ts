import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';

const routes: Routes = [
  { path: 'three', component: View3Component },
  { path: 'four', component: View4Component },
  { path: '', component: View4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
