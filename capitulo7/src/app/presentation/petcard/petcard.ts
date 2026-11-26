import { Component, input, output } from '@angular/core';
import { Pet } from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-petcard',
  styleUrl: './petcard.css',
  templateUrl: './petcard.html',
})
export class Petcard {
//input que recibe la mascota 

pet=input<Pet>();

//output emite el nombre de la mascota 

namePet=output<string>();

emitNamePet(){
  this.namePet.emit(this.pet()?.name??"");
}


}
