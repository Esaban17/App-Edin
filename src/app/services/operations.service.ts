import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  url = "http://localhost:3000/Operations";
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url, { headers: this.setHeaders() }).toPromise();
  }

  postOperation(data:any) {
    return this.http.post(this.url, data, { headers: this.setHeaders() }).toPromise();
  }

  setHeaders() {
    this.headers.append('Content-Type', 'application/json');
    return this.headers;
  }
}
