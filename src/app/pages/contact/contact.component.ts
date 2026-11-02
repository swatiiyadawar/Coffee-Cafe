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
    this.reservationService.send({
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      purpose: form.value.purpose,
      preferred_date: form.value.preferred_date ?? '',
      message: form.value.message,
    }).subscribe({
      next: ({ success, message }) => {
        this.sending = false;
        if (!success) {
          this.hasError = true;
          this.response = message || 'We could not send your inquiry right now. Please try again shortly.';
          return;
        }
        this.response = message || 'Your inquiry has been sent successfully.';
        form.resetForm();
      },
      error: (error: { error?: { message?: string } }) => {
        this.sending = false;
        this.hasError = true;
        this.response = error.error?.message || 'We could not send your inquiry right now. Please try again shortly.';
      },
    });
  }
}
