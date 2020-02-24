import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

 POSTS = [
  {id: 1, title:'Post1', content: 'this is post one', 
  commentpost: [{id: 1, name: 'Alex', comment: 'This post 1 is great post !!!'},
  {id: 2, name: 'John', comment: 'Thank you for post 1!'}]},
  {id: 2, title:'Post2', content: 'this is post two', 
  commentpost: [{id: 1, name: 'Alex', comment: 'This post 2 is great post !!!'},
  {id: 2, name: 'John', comment: 'Thank you for post 2!'}]},
  {id: 3, title:'Post3', content: 'this is post three', 
  commentpost: [{id: 1, name: 'Alex', comment: 'This post 3 is great post !!!'},
  {id: 2, name: 'John', comment: 'Thank you for post 3!'}]},
  {id: 4, title:'Post4', content: 'this is post four', 
  commentpost: [{id: 1, name: 'Alex', comment: 'This post 4 is great post !!!'},
  {id: 2, name: 'John', comment: 'Thank you for post 4!'}]}
];

}
