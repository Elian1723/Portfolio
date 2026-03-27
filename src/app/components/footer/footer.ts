import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IconService } from '../../services/iconService';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Footer {
  protected skillIconService = inject(IconService);
  protected year = signal<number>(new Date().getFullYear())
}
