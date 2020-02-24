import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USERS = [
    {id: 1, fname: 'Alex', lname: 'Smith', user: 'alex', pass: 'abc123'},
    {id: 2, fname: 'John', lname: 'Jackson', user: 'john', pass: '123123'},
];

  constructor() { }

  
}
