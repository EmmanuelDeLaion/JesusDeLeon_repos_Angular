import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokemonSelected: any = {};
  isNew: boolean = true;
  msgRegisterOrUpdate: string = "";
  titleRegisterOrUpdate: string = "";
  isActivePopUp: boolean = false;

  constructor() { }
}
