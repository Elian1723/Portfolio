import { Component, inject } from '@angular/core';
import { SkillIcons } from '../../../services/skillIcons';
import { Icon } from "../../../shared/components/icon/icon";

@Component({
  selector: 'app-carousel',
  imports: [Icon],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  protected skillIcons = inject(SkillIcons);
}
