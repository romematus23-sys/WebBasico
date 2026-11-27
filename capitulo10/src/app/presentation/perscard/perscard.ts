import { Component, input, output } from '@angular/core';
import { Persona } from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-perscard',
  templateUrl: './perscard.html',
})
export class Perscard {
  // el componenete productcard de recir un producto
  persona=input <Persona>();
  //emite el nombre del producto que quiero eliminar 

  nameDelete=output<string>();// aqui ya le decimos que producto eligio el usuario 

  emitPersonaName(){
    console.log(this.persona()?.name);// solo para veer en la consola 
    this.nameDelete.emit(this.persona()?.name??":");//cuando uno le da click al boton se toma el nombre del producto lo guarda y se lo pasa al padre
  }
}
