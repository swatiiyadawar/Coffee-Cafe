import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TickerComponent } from '../../shared/ticker/ticker.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { ReservationService } from '../../shared/reservation.service';
@Component({ selector: 'app-contact', standalone: true, imports: [FormsModule, TickerComponent, RevealDirective], templateUrl: './contact.component.html' })
export class ContactComponent {
  sending = false;
  response = '';
  hasError = false;
  constructor(private readonly reservationService: ReservationService) {}

  reserve(form: NgForm): void {
    if (!form.valid || this.sending) return;
    this.sending = true;
    this.response = '';
    this.hasError = false;
    this.reservationService.send({ ...form.value, notes: form.value.notes ?? '' }).subscribe({
      next: ({ message }) => { this.sending = false; this.response = message; form.resetForm(); },
      error: (error: { error?: { message?: string } }) => {
        this.sending = false;
        this.hasError = true;
        this.response = error.error?.message || 'We could not send your reservation right now. Please try again shortly.';
      },
    });
  }
}
