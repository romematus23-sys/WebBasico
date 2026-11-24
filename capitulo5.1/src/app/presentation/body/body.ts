import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  data:WritableSignal<number> =signal(0);
  dataInput:WritableSignal<string> = signal ('');

  inc(){
    this.data.update(actual=>actual+1);
  }
  dec(){
    this.data.update(actual=>actual-1);
  }
  
  reload(){
    this.data.set(parseInt(this.dataInput()));
  }
}
