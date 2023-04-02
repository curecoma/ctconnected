import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isComponentLoaded = false;

  switchToNewComponent() {
    // Trigger the switch to the new component
    this.isComponentLoaded = false;
  }
}
