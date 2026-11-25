import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './presentation/navbar/navbar';
import { Body } from './presentation/body/body';
import { Footer } from './presentation/footer/footer';

@Component({
  imports: [RouterOutlet, Navbar, Body, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('capitulo7');
}
