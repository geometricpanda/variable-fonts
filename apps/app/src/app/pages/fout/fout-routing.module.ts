import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FoutComponent } from './fout.component';

const fout: Route = {
  path: '',
  component: FoutComponent
}

const routes: Routes = [
  fout
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoutRoutingModule { }
