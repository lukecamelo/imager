import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();
  private apiUrl = "http://localhost:4201";

  constructor(private http: HttpClient) {
    this.apiData$ = this.getImages().pipe()
   }

  uploadImage(data: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/upload`, data)
  }

  deleteImage(data: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/delete`, data)
  }

  getImages() {
    return this.http.get(`${this.apiUrl}/images`)
  }

  setImageList(data: any) {
    console.log("inside httpService: ", this.apiData)
    this.apiData.next(data)
    console.log("inside httpService after change: ", this.apiData)
  }
}