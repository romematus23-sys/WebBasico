import { Component, signal, WritableSignal } from '@angular/core';
import { Pet, Specie } from '../../domain/entities';
import { Petform } from '../petform/petform';

@Component({
  imports: [Petform],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  pets:WritableSignal<Pet[]>=signal([
    {name:"Chicharron", breed:"Rat Terrier", age:3, specie:Specie.DOG}
  ]);

  insert(pet:Pet){
    this.pets.update(actual=>[...actual, pet]);
    console.log(this.pets());

  }
}
