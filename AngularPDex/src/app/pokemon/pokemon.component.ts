import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'app/services/pokemon.service';
import { Pokemon } from 'app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers:[ PokemonService ]
})
export class PokemonComponent implements OnInit {
  buttonString = 'More';
  title = 'Pokemon Card';
  subTitle = 'Test';
  
  pokemon: {} | Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemonById(1)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

}
