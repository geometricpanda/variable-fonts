import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
};

const foit: Route = {
  path: 'foit',
  loadChildren: () => import('./pages/foit/foit.module').then(mod => mod.FoitModule)
};

const fout: Route = {
  path: 'fout',
  loadChildren: () => import('./pages/fout/fout.module').then(mod => mod.FoutModule)
};

const variable: Route = {
  path: 'variable',
  loadChildren: () => import('./pages/variable/variable.module').then(mod => mod.VariableModule)
};

const configurator: Route = {
  path: 'configurator',
  loadChildren: () => import('./pages/configurator/configurator.module').then(mod => mod.ConfiguratorModule)
};

const routes: Routes = [
  home,
  foit,
  fout,
  variable,
  configurator,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
