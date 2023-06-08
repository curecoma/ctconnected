import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('250ms 250ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ],
})
export class LoadingScreenComponent {
  constructor(public loader: LoaderService) {
  }
}
