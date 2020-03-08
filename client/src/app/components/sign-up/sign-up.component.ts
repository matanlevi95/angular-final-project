import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service"
import { Router } from '@angular/router';
import citiesList from "./city_list.js";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', "../sign-in/sign-in.component.css"]
})
export class SignUpComponent implements OnInit {
  email: string
  password: string
  message: string
  constructor(public userService: UserService, public router: Router) {
    this.email = ""
    this.password = ""
    this.message = ""
  }

  ngOnInit() {

   }

  signUp() {
    let { email, password } = this
    if (!email || !password) return this.message = "Please enter all the fields"
    this.userService.signUp(email, password).subscribe((res) => {
      this.message = res.message
      this.router.navigate(["/signin"])
    })
  }
}