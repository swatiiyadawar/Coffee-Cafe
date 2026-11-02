import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { RouterLink } from '@angular/router';
@Component({ selector: 'app-about', standalone: true, imports: [RevealDirective, RouterLink], templateUrl: './about.component.html' })
export class AboutComponent {}
