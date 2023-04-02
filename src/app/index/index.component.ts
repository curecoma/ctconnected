import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }
}

