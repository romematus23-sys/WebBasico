import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.html'
})
export class Body {

  numero = signal(0);
  resultado = signal(0);

  calcular() {
    let factorial = 1;
 for (let i = 1; i <= this.numero(); i++) {factorial *= i;}
    this.resultado.set(factorial);
  }
}