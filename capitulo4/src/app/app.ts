import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './domain/entities';
import { changeAbout } from './application/use_case_user';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  user1:User ={
    nombre: "Edgar",
    profesion:"html developer",
    acerca:"soy desarrollador"
  };

  executeAction(user:User){
    changeAbout(user)
  }
  changeNameUpper(){
    this.user1.nombre=this.user1.nombre.toUpperCase();
  }
  changeNameLower(){
    this.user1.nombre=this.user1.nombre.toLowerCase();
  }

}
