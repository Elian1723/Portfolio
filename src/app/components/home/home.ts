import { Component } from '@angular/core';
import { Carousel } from "./carousel/carousel";
import { Octocat } from "../../shared/components/octocat/octocat";
import { Greeting } from "./greeting/greeting";
import { ProfileCircle } from "./profile-circle/profile-circle";

@Component({
  selector: 'app-home',
  imports: [Carousel, Octocat, Greeting, ProfileCircle],
  templateUrl: './home.html',
})
export class Home { }
