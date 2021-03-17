import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ConfiguratorComponent } from './configurator.component';

const configurator: Route = {
  path: '',
  component: ConfiguratorComponent
};

const routes: Routes = [
  configurator
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule {
}
