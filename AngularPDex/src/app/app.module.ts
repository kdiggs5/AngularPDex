import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialUiModule } from './material-ui/material-ui.module';
import { ServiceModule } from 'app/services/service.module';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import { ApiService } from 'app/services/api.service';
import { PokemonService } from 'app/services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    ServiceModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
