import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
@Component({ selector: 'app-faq', standalone: true, imports: [NgFor, RevealDirective], templateUrl: './faq.component.html' })
export class FaqComponent {
  readonly questions = [
    ['Do You Offer Takeaway And Grab-To-Go Orders?', 'Yes! We offer convenient takeaway and grab-and-go orders for your busy days. Simply place your order and enjoy your favorite coffee wherever you go.'],
    ['Are Your Coffee Beans Freshly Roasted Every Day?', 'Yes. We roast in small batches to keep every cup full of flavor and aroma.'],
    ['Do You Provide Dairy-Free And Vegan Milk Options?', 'Of course. Oat, almond, and soy milk are available for any drink.'],
    ['Can I Order Coffee Online For Pickup Or Delivery?', 'Order ahead for pickup at your favorite branch, or choose delivery in our ordering partners’ app.'],
    ['Do You Offer Complimentary Wi-Fi For Customers?', 'Yes, enjoy complimentary Wi-Fi at all of our cafes.'],
    ['Do You Serve Fresh Pastries And Light Snacks?', 'Fresh pastries and light bites are served daily, while they last.'],
  ];
  openIndex = 0;
  toggle(index: number): void { this.openIndex = this.openIndex === index ? -1 : index; }
}
