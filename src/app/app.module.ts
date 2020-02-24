import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from './post/post.service';
import { PostComponent } from './post/post.component';
import { DetailpostComponent } from './detailpost/detailpost.component';
import { NewpostComponent } from './newpost/newpost.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DetailpostComponent,
    NewpostComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    HeroFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
