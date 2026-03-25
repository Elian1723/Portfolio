import { Component, inject } from '@angular/core';
import { SkillIconService } from '../../../services/skillIconService';
import { Icon } from "../../../shared/components/icon/icon";

@Component({
  selector: 'app-carousel',
  imports: [Icon],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  protected skillIcons = inject(SkillIconService);
}
