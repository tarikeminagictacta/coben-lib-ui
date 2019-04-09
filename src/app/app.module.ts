import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CobenLibCommonModule } from '@coben-lib/common';
import { CobenLibFinanceModule } from '@coben-lib/finance';
import { CobenLibHospiModule } from '@coben-lib/hospi';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeComponentComponent } from './some-component/some-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponentComponent
  ],
  imports: [
    BrowserModule,
    CobenLibCommonModule,
    CobenLibHospiModule,
    CobenLibFinanceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
