import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Home } from "../../components/home/home";
import { About } from "../../components/about/about";
import { Skills } from "../../components/skills/skills";
import { Footer } from "../../components/footer/footer";
import { Projects } from "../../components/projects/projects";

@Component({
  selector: 'app-portfolio',
  imports: [Navbar, Home, About, Skills, Footer, Projects],
  templateUrl: './portfolio.html',
})
export class Portfolio { }
