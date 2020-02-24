import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { DetailpostComponent } from './detailpost/detailpost.component';
import { NewpostComponent } from './newpost/newpost.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';

const routes: Routes = [
  { path: '' , component: PostComponent},
  { path: 'new' , component: NewpostComponent},
  { path: 'detail/:id' , component: DetailpostComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'loginform' , component: LoginFormComponent },
  { path: 'register' , component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
