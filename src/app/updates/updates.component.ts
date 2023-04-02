import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})

export class UpdatesComponent {
  constructor(private http: HttpClient) {
    this.http.get('/assets/JSON/updates.json').subscribe((data: any) => {
      for (const update of data[0].updates) {
        let text = '';
        text += '<li><h4>' + update.date + '</h4>';
        text += update.content + '<hr></li>';
        document.getElementById('UpdateContents')!.innerHTML += text;
      }
    });
  }
}
