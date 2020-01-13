import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStatusComponent } from './list-status/list-status.component';
import { ListStatusModule } from './list-status/list-status.module';
import { ListStatusService } from './list-status/list-status.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListStatusModule
  ],
  providers: [
    ListStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
