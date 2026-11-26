import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Backenditem } from '../../application/backenditem';
import { Product } from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body implements OnInit {
  private _service=inject(Backenditem);
  products: WritableSignal<Product[]>= signal([]);


  ngOnInit(): void {
    this._service.getProductsFromAPI()
                  .subscribe({
                    next: values => this.products.set(values),
                    error: e=>console.log(e)
                  });
  }

}
