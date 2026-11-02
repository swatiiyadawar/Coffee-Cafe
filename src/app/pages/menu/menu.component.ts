import { Component } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { ReviewsComponent } from '../../shared/reviews/reviews.component';
import { TickerComponent } from '../../shared/ticker/ticker.component';
import { RevealDirective } from '../../directives/reveal.directive';
@Component({ selector: 'app-menu', standalone: true, imports: [NgFor, CurrencyPipe, ReviewsComponent, TickerComponent, RevealDirective], templateUrl: './menu.component.html' })
export class MenuComponent {
  readonly products = [
    { name: 'CLASSIC LATTE', price: 5.8, image: 'menu-latte.avif' }, { name: 'SIGNATURE ESPRESSO', price: 3.9, image: 'menu-espresso.avif' }, { name: 'CARAMEL MACCHIATO', price: 6.7, image: 'menu-macchiato.avif' },
    { name: 'VANILLA COLD BREW', price: 6.5, image: 'menu-coldbrew.avif' }, { name: 'VELVET MOCHA', price: 7.2, image: 'menu-mocha.avif' }, { name: 'HAZELNUT CAPPUCCINO', price: 6.3, image: 'menu-cappuccino.avif' },
    { name: 'MIDNIGHT VELVET', price: 7.4, image: 'menu-midnight.avif' }, { name: 'GOLDEN CREMA', price: 6.9, image: 'menu-crema.avif' }, { name: 'AMBER ROAST', price: 7.1, image: 'menu-amber.avif' },
  ];
}
