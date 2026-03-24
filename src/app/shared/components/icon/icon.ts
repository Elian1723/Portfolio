import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
})
export class Icon {
  public name = input.required<string>();
  public color = input<string>('94A0A9');
  private baseUrl: string = 'https://api.iconify.design/';
  protected url = computed<string>(() => `${this.baseUrl}${this.name()}.svg?color=%23${this.color()}`);
}
