import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { IconService } from '../../../services/iconService';

@Component({
  selector: 'app-greeting',
  imports: [NgxTypewriterComponent],
  templateUrl: './greeting.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Greeting {
  protected skillIconService = inject(IconService);
}
