import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ConfiguratorComponent } from './configurator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfiguratorToValuesPipe } from './configurator-to-values.pipe';


@NgModule({
  declarations: [ConfiguratorComponent, ConfiguratorToValuesPipe],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ConfiguratorModule { }
