import { Component, Input } from '@angular/core';
@Component({ selector: 'app-ticker', standalone: true, template: `<div class="ticker" [class.ticker-bottom]="bottom" aria-label="Coffee drinks"><div class="ticker-track" aria-hidden="true"><span>{{ drinks }}</span><span>{{ drinks }}</span></div></div>` })
export class TickerComponent { @Input() bottom = false; readonly drinks = 'AMERICANO · CAPPUCCINO · LATTE · FLAT WHITE · MACCHIATO · MOCHA · AFFOGATO · CORTADO · IRISH COFFEE · COLD BREW · NITRO ·'; }
