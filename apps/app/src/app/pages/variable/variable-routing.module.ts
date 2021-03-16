import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { VariableComponent } from './variable.component';


const variable: Route = {
  path: '',
  component: VariableComponent,
}

const routes: Routes = [
  variable
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariableRoutingModule { }
