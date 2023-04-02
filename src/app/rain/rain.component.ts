import { Component } from '@angular/core';
import * as $ from "jquery";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent {
  @HostListener('window:load', ['$event'])
  onPageLoad() {
    // Call the makeitrain() function here
    makeItRain();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    // Call the makeitrain() function here
    makeItRain();
  }
}
export function makeItRain() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var incrementRain = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 200) {
      incrementRain = increment;
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (198 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties

      while (incrementRain > 120) {
          incrementRain -= 100;
      }

      drops += '<div class="drop" style="left: ' + incrementRain + '%; bottom: ' + (randoFiver + randoFiver - 1 + 125) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + incrementRain + '%; bottom: ' + (randoFiver + randoFiver - 1 + 125) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}
