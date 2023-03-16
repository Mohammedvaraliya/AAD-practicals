import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GlobalErrorHandler } from './GlobalErrorHandler';
import { ErrorHandler, NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ErrorHandler, useClass:GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
