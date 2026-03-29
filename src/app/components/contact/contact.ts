import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, viewChild } from '@angular/core';
import { IconService } from '../../services/iconService';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Contact {
  private modalRef = viewChild<ElementRef<HTMLDialogElement>>('warning_modal');
  protected iconService = inject(IconService);

  protected submitEmail(e: Event): void {
    e.preventDefault();

    const modal = this.modalRef()?.nativeElement;

    if (modal) {
      modal.showModal();
    }
  }
}
