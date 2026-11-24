import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { arma } from './domain/entities';
import { changeAbout } from './application/use_case_user';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  arma1: arma = {
    arma: "G3",
    estado: "BUENO",
    folio: "E5984671",
    tipo: "LARGA"
  };

  executeAction(arma: arma) {
    changeAbout(arma);
  }

  changeNameUpper() {
    this.arma1.arma = this.arma1.arma.toUpperCase();
  }

  changeNameLower() {
    this.arma1.arma = this.arma1.arma.toLowerCase();
  }
}
