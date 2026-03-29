import { Component, signal } from '@angular/core';
import { NgxNumberTickerComponent } from '@omnedia/ngx-number-ticker';

@Component({
  selector: 'app-about',
  imports: [NgxNumberTickerComponent],
  templateUrl: './about.html',
})
export class About {
  protected year = signal(new Date().getFullYear());
}
