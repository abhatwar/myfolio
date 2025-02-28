import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { CommonModule, NgStyle, NgClass } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CommonModule, NgStyle, NgClass],
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
  ],
})
export class FrontPageComponent {
  scaleSize = 0.5; // Initial small size of the sphere
  rotationDegree = 0; // Initial rotation
  showCards = false; // Cards visibility

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY;
    const maxScroll = window.innerHeight;

    // Sphere Effect: Adjust scale between 0.5 (small) to 2 (large)
    this.scaleSize = Math.min(2, 0.5 + (scrollPosition / maxScroll) * 1.5);

    // Sphere Effect: Rotate sphere clockwise
    this.rotationDegree = (scrollPosition / maxScroll) * 360;

    // Show cards when user scrolls past the sphere
    if (scrollPosition > maxScroll * 0.5) {
      this.showCards = true;
    }
  }

  getSphereStyle() {
    return {
      'transform': `scale(${this.scaleSize}) rotate(${this.rotationDegree}deg)`,
      'transition': 'transform 0.3s ease-out' // Smooth transition
    };
  }
}