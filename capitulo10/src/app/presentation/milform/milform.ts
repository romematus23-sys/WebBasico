import { Component, output, signal, WritableSignal } from '@angular/core';
import { Arma } from '../../domain/entities';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-milform',
  styleUrl: './milform.css',
  templateUrl: './milform.html',
})
export class milform{
  


  // almacena los datos del formulario 
  arma: WritableSignal<Arma> = signal({
    id:0,
    name: '',
    description:'',
    caliber:'',
    price:0,
  });

  //emisor de pet
  newArma = output<Arma>();
  // variable de error
  error: WritableSignal<boolean> = signal(false);
  mensaje: WritableSignal<string> = signal("");

  emitArma() {
    
      this.newArma.emit({
        id: this.arma().id,
        name: this.arma().name,
        description: this.arma().description,
        caliber: this.arma().caliber,
        price: this.arma().price
      });

  }
}

