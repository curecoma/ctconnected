import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpClient) { }

  getData() {
      return this.httpService.get('/assets/JSON/blog.json');
  }
}

