import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FechactualComponent } from './fechactual/fechactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    FechactualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
