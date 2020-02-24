import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute, 
    private authservice : AuthService
    ) { }

  ngOnInit() {
  }

  signIn(username: string, pass: string){
    for(let user of this.authservice.USERS){
      if(username == user.user && pass == user.pass){
      }
    }
  }

}
