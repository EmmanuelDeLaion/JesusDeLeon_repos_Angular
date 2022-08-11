import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-form-register-update',
  templateUrl: './form-register-update.component.html',
  styleUrls: ['./form-register-update.component.scss'],
})
export class FormRegisterUpdateComponent implements OnInit {

  id:number = 1;
  idAuthor: number = 1;
  hp: number = 0;
  type: string = "Unknow";

  valueAttack: any = 0;
  valueDefending: number = 0;
  valueMaxAttack: number = 100;
  valueMaxDefending: number = 100;

  pokemon: any = {};

  constructor(public dataService: DataService, private pokemonService: PokemonsService) { }

  ngOnInit(): void {

  }


  setValueAttack(value: any) {
    this.valueAttack = value;
  }


  setValueDefending(value: any) {
    this.valueDefending = value;
  }


  cancelRegister() {
    this.dataService.pokemonSelected = {};
    this.dataService.isNew = true;
  }


  savePokemon(form: NgForm, id:number) {
    console.log(form.value);
    if (this.dataService.isNew) {
      if (form.invalid) {
        return;
      } else {
        this.pokemonService.createPokemon(form.value).subscribe(
          res => {
            this.dataService.msgRegisterOrUpdate = `El pokemon: ${form.value.name} se registró correctamente`;
            this.dataService.titleRegisterOrUpdate = "¡Registrado!";
            this.dataService.isActivePopUp = true;
            this.dataService.isNew = true;
          },
          err => {
            console.log(err);
          }
        );
      }
    }else{
      if(form.invalid){
        return;
      }else{
        console.log(form.value);
        this.pokemonService.updatePokemon(id,form.value).subscribe(
          res => {
            this.dataService.msgRegisterOrUpdate = `El pokemon: ${form.value.name} se actualizó correctamente`;
            this.dataService.titleRegisterOrUpdate = "¡Actualizado!";
            this.dataService.isActivePopUp = true;
            this.dataService.isNew = false;
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  }


}
