import { Component, input, output } from '@angular/core';
import { Arma } from '../../domain/entities';



@Component({
  imports: [],
  selector: 'app-milcard',
  styleUrl: './milcard.css',
  templateUrl: './milcard.html',
})
export class Milcard {
  // el componenete productcard de recir un producto
  arma=input <Arma>();
  //emite el nombre del producto que quiero eliminar 

  nameDelete=output<string>();// aqui ya le decimos que producto eligio el usuario 

  emitArmaName(){
    console.log(this.arma()?.name);// solo para veer en la consola 
    this.nameDelete.emit(this.arma()?.name??":");//cuando uno le da click al boton se toma el nombre del producto lo guarda y se lo pasa al padre
  }
}
