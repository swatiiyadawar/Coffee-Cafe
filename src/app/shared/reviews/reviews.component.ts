import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
@Component({ selector: 'app-reviews', standalone: true, imports: [RevealDirective], templateUrl: './reviews.component.html' })
export class ReviewsComponent {
  readonly reviews = [
    { name: 'Daniel Brooks', role: 'Product Designer', quote: '“A truly polished experience. The service feels effortless, reliable, and carefully designed. Everything works together perfectly. I would highly recommend it.”' },
    { name: 'Sofia Bennett', role: 'Coffee Enthusiast', quote: '“My favorite little pause in the city. The coffee is beautiful, the team is lovely, and the atmosphere makes you want to stay.”' },
    { name: 'Marcus Chen', role: 'Local Guest', quote: '“Thoughtful coffee, warm service, and a space that feels like home. Every visit is a good one.”' },
  ];
  active = 0;
  move(amount: number): void { this.active = (this.active + amount + this.reviews.length) % this.reviews.length; }
}
