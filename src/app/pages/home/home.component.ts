import { Component } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TickerComponent } from '../../shared/ticker/ticker.component';
import { ReviewsComponent } from '../../shared/reviews/reviews.component';
import { FaqComponent } from '../../shared/faq/faq.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({ selector: 'app-home', standalone: true, imports: [NgFor, CurrencyPipe, RouterLink, TickerComponent, ReviewsComponent, FaqComponent, RevealDirective], templateUrl: './home.component.html' })
export class HomeComponent {
  readonly products = [
    { name: 'CLASSIC LATTE', price: 5.8, image: 'menu-latte.avif' }, { name: 'SIGNATURE ESPRESSO', price: 3.9, image: 'menu-espresso.avif' },
    { name: 'CARAMEL MACCHIATO', price: 6.7, image: 'menu-macchiato.avif' }, { name: 'VANILLA COLD BREW', price: 6.5, image: 'menu-coldbrew.avif' },
    { name: 'VELVET MOCHA', price: 7.2, image: 'menu-mocha.avif' }, { name: 'HAZELNUT CAPPUCCINO', price: 6.3, image: 'menu-cappuccino.avif' },
  ];
}
