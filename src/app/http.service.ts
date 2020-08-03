import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "http://localhost:4201";
  constructor(private http: HttpClient) { }

  uploadImage(data: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/upload`, data)
  }

  deleteImage(data: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/delete`, data)
  }

  getImages() {
    return this.http.get(`${this.apiUrl}/images`)
  }
}