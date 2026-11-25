import { Component, signal, WritableSignal } from '@angular/core';
import { Product } from '../../domain/entities';
import { Productcard } from '../productcard/productcard';
// este es el padre 
@Component({
  imports: [Productcard],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  products:WritableSignal<Product[]> = signal([
    {name:"agua", brand:"epura", price:10, description:"agua pura de manantial"},
    {name:"caguama", brand:"indio", price: 70, description:"agua pal calor"},
    {name:"jabon", brand:"venus", price: 10, description:"jabon rompe hogares"}
  ]);

  deleteProduct(name: string){
    this.products.set(
      this.products().filter(t=>t.name != name) // en esta parte manda a traer todos los productos exepto el que eliminamos 
    )
  }
}
