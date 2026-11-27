
import { Component, signal, WritableSignal } from '@angular/core';
import { Persona } from '../../domain/entities';
import { persform } from '../persform/persform';
import { Perscard } from '../perscard/perscard';

@Component({
  selector: 'app-personal',
  imports: [persform, Perscard],
  templateUrl: './personal.html'
})
export class Personal {

  personas: WritableSignal<Persona[]> = signal([]);

  insertPersona($event: Persona) {
    this.personas.update(lista => [...lista, $event]);
  }

  deletePersona(name: string) {
    this.personas.update(
      lista => lista.filter(p => p.name !== name)
    );
  }
}
