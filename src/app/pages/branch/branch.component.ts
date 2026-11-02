import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ReviewsComponent } from '../../shared/reviews/reviews.component';
import { TickerComponent } from '../../shared/ticker/ticker.component';
import { RevealDirective } from '../../directives/reveal.directive';
@Component({ selector: 'app-branch', standalone: true, imports: [NgFor, ReviewsComponent, TickerComponent, RevealDirective], templateUrl: './branch.component.html' })
export class BranchComponent {
  readonly branches = [
    { name: 'THE RESERVE COFFEE SHOP', image: 'branch-one.avif', street: '245 Madison Avenue', city: 'New York, NY 10016', hours: '7:00 AM – 9:00 PM', address: '245 Madison Ave, New York, NY 10016' },
    { name: 'THE ROAST STUDIO', image: 'branch-two.avif', street: '742 Sunset Boulevard,', city: 'Los Angeles, CA 90028', hours: '6:30 AM – 10:00 PM', address: '742 Sunset Blvd, Los Angeles, CA 90028' },
    { name: 'THE BREW LOUNGE', image: 'branch-chicago.avif', street: '118 North Michigan Avenue,', city: 'Chicago, IL 60601', hours: '7:30 AM – 9:30 PM', address: '118 N Michigan Ave, Chicago, IL 60601' },
    { name: 'THE COFFEE ATELIER', image: 'branch-seattle.avif', street: '312 Pike Street,', city: 'Seattle, WA 98101', hours: '6:00 AM – 8:30 PM', address: '312 Pike St, Seattle, WA 98101' },
    { name: 'THE VELVET ROASTERY', image: 'branch-boston.avif', street: '680 Boylston Street,', city: 'Boston, MA 02116', hours: '7:00 AM – 9:30 PM', address: '680 Boylston St, Boston, MA 02116' },
    { name: 'THE ARTISAN BREW HOUSE', image: 'branch-sf.avif', street: '525 Market Street,', city: 'San Francisco, CA 94105', hours: '6:30 AM – 9:00 PM', address: '525 Market St, San Francisco, CA 94105' },
  ];
}
