import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoutRoutingModule } from './fout-routing.module';
import { FoutComponent } from './fout.component';


@NgModule({
  declarations: [FoutComponent],
  exports: [FoutComponent],
  imports: [
    CommonModule,
    FoutRoutingModule
  ]
})
export class FoutModule {
}
