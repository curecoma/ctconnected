import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  template: `
    <ul>
      <li
        *ngFor="
          let item of data | paginate : { itemsPerPage: 5, currentPage: p }
        "
      >
        <!-- Display your article content here -->
      </li>
    </ul>
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `,
})
export class BlogComponent {
  showPagination = true;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.paginationChecker();
    this.route.queryParams.subscribe((params: Params) => {
      const tag = params['tag'];
      const urlTitle = params['title'];
      if (urlTitle) {
        this.getDataTitle(urlTitle);
      } else if (tag) {
        this.getDataTag(tag);
      } else {
        this.getData();
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.paginationChecker();
      }
    });
  }

  paginationChecker() {
    if (this.router.url.includes('title')) {
      this.showPagination = false;
    } else {
      this.showPagination = true;
    }
  }

  isTagArray(tag: any): boolean {
    return Array.isArray(tag);
  }

  p: any;
  data: any = [];
  getDataTag(tag?: string) {
    this.auth.getData().subscribe((data) => {
      const filteredArray: any[] = [];
      this.data = data;
      if (Array.isArray(data)) {
        data.forEach((obj) => {
          const { tags } = obj;
          if (Array.isArray(tags) && tags.includes(tag)) {
            filteredArray.push(obj);
          }
        });
        this.data = filteredArray;
      }
    });
  }

  getDataTitle(urlTitle?: string) {
    this.auth.getData().subscribe((data) => {
      const filteredArray: any[] = [];
      this.data = data;
      if (Array.isArray(data)) {
        data.forEach((obj) => {
          if (urlTitle == obj.title) {
            filteredArray.push(obj);
          }
        });
        this.data = filteredArray;
      }
    });
  }

  getData() {
    this.auth.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
