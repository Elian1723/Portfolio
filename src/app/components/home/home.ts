import { Component, inject } from '@angular/core';
import { Greeting } from "./greeting/greeting";
import { ProfileCircle } from "./profile-circle/profile-circle";
import { NgxMarqueeComponent } from "@omnedia/ngx-marquee";
import { Icon } from "../../shared/components/icon/icon";
import { SkillIconService } from '../../services/skillIconService';

@Component({
  selector: 'app-home',
  imports: [Greeting, ProfileCircle, NgxMarqueeComponent, Icon],
  templateUrl: './home.html',
})
export class Home {
  protected skillIcons = inject(SkillIconService);
}
