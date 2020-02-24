import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: {id: number, fname: string, lname: string, username: string, password: string};
  // user: {id: number, fname: '', lname: '', username: '', password: ''};
  // user: {id: number, fname: '', lname: '', username: '', password: ''};

  NN = '';

  constructor(private authservice : AuthService) { }

  ngOnInit() {
  }

  register(fname: string, lname: string, username: string, password: string){
    this.authservice.USERS.push({id: this.authservice.USERS.length + 1, 
      fname: fname, lname: lname, user: username , pass: password });
      alert('Register success!!!');
  }

}
