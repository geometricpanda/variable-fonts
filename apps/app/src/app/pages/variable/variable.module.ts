import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariableRoutingModule } from './variable-routing.module';
import { VariableComponent } from './variable.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VariableComponent],
  imports: [
    CommonModule,
    VariableRoutingModule,
  ],
  exports: [VariableComponent]
})
export class VariableModule {
}
