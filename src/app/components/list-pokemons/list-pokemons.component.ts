import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { DataService } from 'src/app/services/data.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss'],
})
export class ListPokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  inputSearch: any = '';
  constructor(
    private pokemonService: PokemonsService,
    private dataService: DataService
  ) {}


  ngOnInit(): void {
    this.getPokemons();
  }


  getPokemons() {
    this.pokemonService.getNPokemons(100).subscribe(
      (resp: any) => {
        this.pokemons = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  getPokemonId(id: any) {
    if (this.inputSearch === '') {
      this.getPokemons();
    } else {
      this.pokemonService.getPokemonID(id).subscribe(
        (pokemon: any) => {
          if (pokemon !== null) {
            if (pokemon.success !== false) {
              this.pokemons = [];
              this.pokemons.push(pokemon);
              console.log(this.pokemons);
            } else {
              this.inputSearch = '';
              this.getPokemons();
            }
          } else {
            this.inputSearch = '';
            this.getPokemons();
          }
        },
        (error) => {
          console.log(error);
          this.getPokemons();
        }
      );
    }
  }


  selectedPokemon(id: any){
    this.dataService.isNew = false;
    this.pokemonService.getPokemonID(id).subscribe(
      res => {
        this.dataService.pokemonSelected = res;
      },
      err => {

      }
    );
  }


  deletePokemonID(id: any){
    this.pokemonService.deletePokemon(id).subscribe(
      res => {
        this.dataService.isActivePopUp = true;
        this.dataService.titleRegisterOrUpdate = "¡Eliminado!";
        this.dataService.msgRegisterOrUpdate = `El pokemon con Id: ${id} se eliminó correctamente`;
        this.getPokemons();
      },
      err => {
        console.log(err);
      }
    );
  }


  selectAction(){
    this.dataService.isNew = true;
    this.dataService.pokemonSelected = {};
  }


}
