import { Component, OnInit } from '@angular/core';

import { PostService } from '../post/post.service';
 
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  newpost: {title: any, content: any};


  constructor(private postservice: PostService) { }

  ngOnInit(){}

    addPost(title: any, content: any){
      this.postservice.POSTS.push({id: this.postservice.POSTS.length + 1, 
        title: title, content: content, commentpost:[]});
    }
    
  }

