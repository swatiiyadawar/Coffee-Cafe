import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      this.element.nativeElement.classList.add('is-visible'); return;
    }
    this.element.nativeElement.classList.add('motion-reveal');
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { this.element.nativeElement.classList.add('is-visible'); this.observer?.unobserve(this.element.nativeElement); }
    }, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
    this.observer.observe(this.element.nativeElement);
  }
  ngOnDestroy(): void { this.observer?.disconnect(); }
}
