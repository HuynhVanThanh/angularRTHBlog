import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PostService } from './post.service';
import { DetailpostComponent } from '../detailpost/detailpost.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

  export class PostComponent implements OnInit {
    postlist;
    @Input() isAddPost;
    
  isDetail: boolean = false;
  index: number;
  detailPost: {title: any, content: any};

  constructor(private postservice: PostService) { }

  ngOnInit() {
    this.postlist = this.postservice.POSTS;
  }

}
