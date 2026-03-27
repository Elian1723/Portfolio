import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { Greeting } from "./greeting/greeting";
import { ProfileCircle } from "./profile-circle/profile-circle";
import { NgxMarqueeComponent, OmMarqueeItemDirective } from "@omnedia/ngx-marquee";
import { IconService } from '../../services/iconService';

@Component({
  selector: 'app-home',
  imports: [Greeting, ProfileCircle, NgxMarqueeComponent, OmMarqueeItemDirective],
  templateUrl: './home.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {
  protected skillIconService = inject(IconService);
}
