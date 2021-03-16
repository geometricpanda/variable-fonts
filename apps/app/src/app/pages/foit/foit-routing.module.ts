import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FoitComponent } from './foit.component';

const foit: Route = {
  path: '',
  component: FoitComponent
}

const routes: Routes = [
  foit
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoitRoutingModule { }
