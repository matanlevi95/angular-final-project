import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-routes-links',
  templateUrl: './routes-links.component.html',
  styleUrls: ['./routes-links.component.css']
})
export class RoutesLinksComponent implements OnInit {
  @Input() routes
  @Input() prefix
  username:string
  constructor(public userService:UserService) {
    this.username = this.userService.getName()
   }

  ngOnInit() {
  }

}
