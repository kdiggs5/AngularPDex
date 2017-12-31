import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'app/services/api.service';
import { PokemonService } from 'app/services/pokemon.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PokemonService
  ]
})
export class ServiceModule { }
