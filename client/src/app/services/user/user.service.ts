import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
const baseURL = "http://localhost:4000"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name: string
  constructor(public http: HttpClient) {
    this.name = ""
  }
  signUp(email: string, password: string): Observable<any> {
    return this.http.post(`${baseURL}/users/signup`, { email, password })
  }
  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${baseURL}/users/signIn`, { email, password })
  }

  setName(name) {
    this.name = name
  }
  getName() {
    return this.name
  }

}



