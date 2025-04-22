import { Component, OnInit, HostListener } from '@angular/core';

interface Raindrop {
  left: number;    // %
  bottom: number;  // %
  delay: number;   // seconds (negative so some drops are mid‑fall on load)
  speed: number;   // seconds
}

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent implements OnInit {
  front: Raindrop[] = [];
  back:  Raindrop[] = [];

  ngOnInit(): void {
    this.makeItRain();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.makeItRain();
  }

  private makeItRain(): void {
    const TOTAL = 200;
    this.front = [];
    this.back  = [];

    for (let i = 0; i < TOTAL; i++) {
      const drop: Raindrop = {
        left:   Math.random() * 100,
        bottom: 100,                         // start just above viewport
        delay:  -(Math.random() * 0.8),      // mid‑fall on first paint
        speed:  (i % 2 === 0 ? 0.55 : 0.9)   // faster than previous pass
                + Math.random() * 0.15
      };
      (i % 2 === 0 ? this.front : this.back).push(drop);
    }
  }
}
