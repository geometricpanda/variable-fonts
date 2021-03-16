import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoitRoutingModule } from './foit-routing.module';
import { FoitComponent } from './foit.component';


@NgModule({
  declarations: [FoitComponent],
  imports: [
    CommonModule,
    FoitRoutingModule
  ],
  exports: [FoitComponent]
})
export class FoitModule {
}
