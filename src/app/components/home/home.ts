import { Component } from '@angular/core';
import { Icon } from "../../shared/components/icon/icon";
import { Carousel } from "./carousel/carousel";

@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.html',
})
export class Home { }
