import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
