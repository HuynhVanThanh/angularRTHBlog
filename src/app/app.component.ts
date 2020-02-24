import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addPost = false;
  name = localStorage.getItem('fname');

  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('fname');
    this.name = '';
    alert('You are logout. Thank you!');
  }


}
