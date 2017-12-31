import { Injectable } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'app/models/pokemon';

@Injectable()
export class PokemonService extends ApiService {  
  public endpoint = "pokemon";
  constructor(http: HttpClient) { 
    super("pokemon",http);
  }

  getAllPokemon(){
    return this.getAll<Pokemon>();
  }

  getPokemonById(id: number){
    return this.getById<Pokemon>(id);
  }

}
