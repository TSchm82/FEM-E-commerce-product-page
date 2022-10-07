import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/components/components.module';
import { ActionsService } from 'src/services/actions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [ActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
