import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:4000/products/"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) {
  }

  getProducts(): Observable<any> {
    const result = this.http.get(`${baseUrl}all`)
    console.log(result);
    return result

  }

}
