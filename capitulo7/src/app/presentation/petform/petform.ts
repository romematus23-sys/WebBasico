import { Component, output, signal, WritableSignal } from '@angular/core';
import { Pet, Specie } from '../../domain/entities';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-petform',
  styleUrl: './petform.css',
  templateUrl: './petform.html',
})
export class Petform {
  options = Object.values(Specie)


  // almacena los datos del formulario 
  pet: WritableSignal<Pet> = signal({
    name: '',
    age: 0,
    breed: '',
    specie: Specie.OTHER
  });

  //emisor de pet
  newPet = output<Pet>();
  // variable de error
  error: WritableSignal<boolean> = signal(false);
  mensaje: WritableSignal<string> = signal("");

  emitPet() {
    if (this.pet().age > 0 && this.pet().age < 100) {
      this.newPet.emit({
        name: this.pet().name,
        age: this.pet().age,
        breed: this.pet().breed,
        specie: this.pet().specie
      });

      this.error.set(false);
      this.mensaje.set("")
    } else {
      this.error.set(true);
      this.mensaje.set("la edad es incorrecta");
    }



  }
}

