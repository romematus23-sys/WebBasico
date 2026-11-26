import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Backenditem } from '../../application/backenditem';
import { Perros} from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body implements OnInit {
  private _service=inject(Backenditem);
  perros: WritableSignal<Perros[]>= signal([]);


  ngOnInit(): void {
    this._service.getPerrosFromAPI()
                  .subscribe({
                    next: values => this.perros.set(values),
                    error: e=>console.log(e)
                  });
  }

}
