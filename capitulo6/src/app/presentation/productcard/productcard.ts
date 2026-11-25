import { Component, input, output } from '@angular/core';
import { Product } from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-productcard',
  styleUrl: './productcard.css',
  templateUrl: './productcard.html',
})
export class Productcard {
  // el componenete productcard de recir un producto
  product=input <Product>();
  //emite el nombre del producto que quiero eliminar 

  nameDelete=output<string>();// aqui ya le decimos que producto eligio el usuario 

  emitProductName(){
    console.log(this.product()?.name);// solo para veer en la consola 
    this.nameDelete.emit(this.product()?.name??":");//cuando uno le da click al boton se toma el nombre del producto lo guarda y se lo pasa al padre
  }
}
