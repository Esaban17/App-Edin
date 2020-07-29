import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  url = "http://192.168.1.30:3000/";
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getModule(idModule: number) {
    return this.http.get(this.url + 'module/' + idModule, { headers: this.setHeaders() }).toPromise();
  }

  getDateModule(idModule: number) {
    return this.http.get(this.url + 'date/' + idModule, { headers: this.setHeaders() }).toPromise();
  }

  getModulePoints(idModule: number){
    return this.http.get(this.url + 'statistics/' + idModule, { headers: this.setHeaders() }).toPromise();
  }

  getUsersPoints(idModule: number){
    return this.http.get(this.url + 'points/' + idModule, { headers: this.setHeaders() }).toPromise();
  }

  setHeaders() {
    this.headers.append('Content-Type', 'application/json');
    return this.headers;
  }
  
}
