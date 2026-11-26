import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Body } from './presentation/body/body';

@Component({
  imports: [RouterOutlet, Body],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('capitulo8');
}
