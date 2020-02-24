import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth.component';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: {id: number, fname: string, lname: string, username: string, pass: string};
  NN = 'dgdf';

  constructor(
    private authservice : AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(username: string , password: string){
    let success = false;
    for(let user of this.authservice.USERS){
      if(user.user == username && user.pass == password){
        this.router.navigate(['']);
        localStorage.setItem('currentUser' , username);
        localStorage.setItem('fname' , user.fname);
        alert('Login successful!!!   Wellcome ' + username);
        success = true;
      }
    }
    if (!success) alert('Username or Password incorrect'); 
  }

}
