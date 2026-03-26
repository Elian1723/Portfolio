import { Component } from '@angular/core';
import { Carousel } from "./carousel/carousel";
import { Greeting } from "./greeting/greeting";
import { ProfileCircle } from "./profile-circle/profile-circle";

@Component({
  selector: 'app-home',
  imports: [Carousel, Greeting, ProfileCircle],
  templateUrl: './home.html',
})
export class Home { }
