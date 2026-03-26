import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
})
export class Contact {
  private modalRef = viewChild<ElementRef<HTMLDialogElement>>('warning_modal');

  protected submitEmail(e: Event): void {
    e.preventDefault();

    const modal = this.modalRef()?.nativeElement;

    if (modal) {
      modal.showModal();
    }
  }
}
