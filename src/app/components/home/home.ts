import { Component } from '@angular/core';
import { Icon } from "../../shared/components/icon/icon";
import { Carousel } from "./carousel/carousel";
import { Octocat } from "../../shared/components/octocat/octocat";

@Component({
  selector: 'app-home',
  imports: [Carousel, Octocat],
  templateUrl: './home.html',
})
export class Home { }
