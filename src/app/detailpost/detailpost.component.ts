import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post/post.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.scss']
})
export class DetailpostComponent implements OnInit {
  @Input() detailpost = false;
  iPost: {id: number, title: any, content: any, commentpost: [{id: number, name: string, comment: string}]};
  isEdit: boolean = false;
  Name = localStorage.getItem('fname');

  constructor(private activeRoute: ActivatedRoute , private postservice: PostService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe( (params) => {
        for(let post of this.postservice.POSTS) {
            if(post.id == +params['id']) {
                this.iPost = {
                    id: +params['id'],
                    title: post.title,
                    content: post.content,
                    commentpost: post.commentpost.slice(0)
                    // commentpost: [post.commentpost[0]]
                  }
            }  
        }
    });

}

  deletePost(id: number){
    let index = this.postservice.POSTS.findIndex(post => post.id === id);
    this.postservice.POSTS.splice(index,1);
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  editPost(id: number,title: any, content: any){
    let i = this.postservice.POSTS.findIndex(post => post.id === id);
    this.postservice.POSTS[i].title = title;
    this.postservice.POSTS[i].content = content;
  }

  addComment(index: number, name: any, comment: any){
    this.postservice.POSTS[index].commentpost.push({
      id: this.postservice.POSTS[index].commentpost.length + 1, name: name, comment: comment});
  }

}
