import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Backendguns } from '../../application/backendguns';
import { Arma } from '../../domain/entities';
import { Milcard } from '../milcard/milcard';
import { milform } from '../milform/milform';

@Component({
  imports: [Milcard, milform],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body implements OnInit {
insert($event: Arma) {
  this.arma.update(lista => [...lista, $event]);
}
  private _service=inject(Backendguns);
  arma: WritableSignal<Arma[]>= signal([]);


  ngOnInit(): void {
    this._service.getArmaFromAPI()
                  .subscribe({
                    next: values => this.arma.set(values),
                    error: e=>console.log(e)
                  });
  }



  deleteArma(name: string){
    this.arma.set(
      this.arma().filter(t=>t.name != name) // en esta parte manda a traer todos los productos exepto el que eliminamos 
    )
  }
}

