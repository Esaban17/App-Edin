import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  url = "http://localhost:3000/";
  url2 = "http://localhost:1880/";
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + 'operations', { headers: this.setHeaders() }).toPromise();
  }

  getResponses(idOperation: any){
    return this.http.get(this.url + 'responses/' + idOperation, { headers: this.setHeaders() }).toPromise();
  }

  getOperation(idOperation: any){
    return this.http.get(this.url + 'operation/' + idOperation, { headers: this.setHeaders() }).toPromise();
  }

  postOperationDB(data:any) {
    return this.http.post(this.url + 'operation', data, { headers: this.setHeaders() }).toPromise();
  }

  postQuestionMQTT(data:any){
    return this.http.post(this.url + 'preguntas', data, { headers: this.setHeaders() }).toPromise();
  }

  getUsers(){
    return this.http.get(this.url + 'users', { headers: this.setHeaders() }).toPromise();
  }

  setHeaders() {
    this.headers.append('Content-Type', 'application/json');
    return this.headers;
  }
}
