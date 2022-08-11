import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  baseUrl: string = "https://bp-pokemons.herokuapp.com/";

  constructor(private http: HttpClient) {}

  getPokemons(){
    return this.http.get(`${this.baseUrl}?idAuthor=1`);
  }

  getNPokemons(value: number){
    return this.http.get(`${this.baseUrl}${value}?idAuthor=1`)
  }

  getPokemonID(id: number): Observable<Pokemon[]>{
    return this.http.get(`${this.baseUrl}${id}`)
      .pipe(
        map((resp:any) => resp)
      );
  }

  createPokemon(pokemon: Pokemon){
    return this.http.post(`${this.baseUrl}?idAuthor=1`,pokemon);
  }

  updatePokemon(id: number, pokemon: Pokemon){
    return this.http.put(`${this.baseUrl}${id}`, pokemon);
  }

  deletePokemon(id: number){
    return this.http.delete(`${this.baseUrl}${id}`);
  }

}
