import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  currentIndex = 0;

  testimonials = [
    {
      image: '/assets/boy IMG.jpg',
      name: 'Amit Verma',
      role: 'Marketing Head',
      text: 'Our business leads improved after working with them.'
    },
    {
      image: '/assets/male2IMG.jpg',
      name: 'Rahul Sharma',
      role: 'Business Owner',
      text: 'The team delivered our website exactly as we envisioned.'
    },
    {
      image: '/assets/female 1IMG.jpg',
      name: 'Priya Mehta',
      role: 'Startup Founder',
      text: 'They helped us build a clean and modern digital presence.'
    },
    {
      image: '/assets/girl IMG.jpg',
      name: 'Neha Kapoor',
      role: 'Business Consultant',
      text: 'Excellent service and timely delivery.'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.testimonials.length;
    }, 4000);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}