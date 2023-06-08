import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { ModalService } from '../modal';

@Component({
  selector: 'app-bms',
  templateUrl: './bms.component.html',
  styleUrls: ['./bms.component.scss']
})
export class BmsComponent {
  constructor(private http: HttpClient, public modalService: ModalService) {
    this.http.get('/assets/JSON/bmsList.json').subscribe((data: any) => {
      for (const bms of data[0].bms) {
        let text = '';
        text += '<tr class="table-row"><td><a href="' + bms.url + '">';
        text += bms.title + '</a></td></tr>';
        document.getElementById('BMSList')!.innerHTML += text;
      }
    });
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  ngAfterViewInit(): void {
    fixListSize();
  }

  modal1 = {
    title: 'Jacket 1',
    imageUrl: '/assets/Jackets/1.png',
    description: 'This is jacket 1.'
  };

  modal2 = {
    title: 'Jacket 2',
    imageUrl: '/assets/Jackets/2.png',
    description: 'This is jacket 2.'
  };

  modal3 = {
    title: 'Jacket 3',
    imageUrl: '/assets/Jackets/3.png',
    description: 'This is jacket 3.'
  };

  modal4 = {
    title: 'Jacket 4',
    imageUrl: '/assets/Jackets/4.png',
    description: 'This is jacket 4.'
  };

  modal5 = {
    title: 'Jacket 5',
    imageUrl: '/assets/Jackets/5.png',
    description: 'This is jacket 5.'
  };

  modal6 = {
    title: 'Jacket 6',
    imageUrl: '/assets/Jackets/6.png',
    description: 'This is jacket 6.'
  };

  modal7 = {
    title: 'Jacket 7',
    imageUrl: '/assets/Jackets/7.png',
    description: 'This is jacket 7.'
  };

  modal8 = {
    title: 'Jacket 8',
    imageUrl: '/assets/Jackets/8.png',
    description: 'This is jacket 8.'
  };
}
function fixListSize() {
  let WindowSize = window.innerWidth;
  let text = 0;
  for (var [i, j] = [0, 0]; j < WindowSize; i++) {
      j = 40 + 268 * i;
      if (j < WindowSize) {
          text = 40 + 268 * i;
      }
  }

  Array.from(document.getElementsByClassName("center"))
  .forEach((element) => {
    if (element instanceof HTMLElement) {
      element.style.maxWidth = text + 'px';
    }
  });
}

window.onload = fixListSize;
window.onresize = fixListSize;
