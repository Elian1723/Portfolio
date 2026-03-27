import { Component } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-greeting',
  imports: [NgxTypewriterComponent],
  templateUrl: './greeting.html',
})
export class Greeting { }
