import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './common/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { FooterModule } from './common/footer/footer.module';
import { FoutModule } from './pages/fout/fout.module';
import { VariableModule } from './pages/variable/variable.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    FoutModule,
    VariableModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FooterModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
