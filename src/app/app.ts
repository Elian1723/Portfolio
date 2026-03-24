import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Footer, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
