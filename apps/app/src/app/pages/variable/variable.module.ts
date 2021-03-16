import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariableRoutingModule } from './variable-routing.module';
import { VariableComponent } from './variable.component';


@NgModule({
  declarations: [VariableComponent],
  imports: [
    CommonModule,
    VariableRoutingModule
  ],
  exports: [VariableComponent]
})
export class VariableModule {
}
