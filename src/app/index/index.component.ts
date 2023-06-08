import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) {
    this.http.get('/assets/JSON/updates.json').subscribe((data: any) => {
      for (const update of data[0].updates) {
        let text = '';
        text += '<li><h4 style="margin-top: 5px;margin-bottom: 5px;">' + update.date + '</h4>';
        text += update.content + '<hr></li>';
        document.getElementById('UpdateContents')!.innerHTML += text;
      }
    });
  }
}

