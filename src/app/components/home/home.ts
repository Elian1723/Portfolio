import { Component } from '@angular/core';
import { Carousel } from "./carousel/carousel";
import { Octocat } from "../../shared/components/octocat/octocat";
import { Greeting } from "./greeting/greeting";
import { Profile } from "./Profile/Profile";

@Component({
  selector: 'app-home',
  imports: [Carousel, Octocat, Greeting, Profile],
  templateUrl: './home.html',
})
export class Home { }
