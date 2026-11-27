import { Component, output, signal, WritableSignal } from '@angular/core';
import { Persona } from '../../domain/entities';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-persform',
  styleUrl: './persform.css',
  templateUrl: './persform.html',
})
export class persform{
  


  // almacena los datos del formulario 
  persona: WritableSignal<Persona> = signal({
   
    name: '',
    edad:0,
    sexo:'',
    
  });

  //emisor de pet
  newPersona = output<Persona>();
  // variable de error
  error: WritableSignal<boolean> = signal(false);
  mensaje: WritableSignal<string> = signal("");

  emitPersona() {
    
      this.newPersona.emit({
        
        name: this.persona().name,
        edad: this.persona().edad,
        sexo: this.persona().sexo
        
      });

  }
}

