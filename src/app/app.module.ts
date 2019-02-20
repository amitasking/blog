import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgxEditorModule} from 'ngx-editor';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import{ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ScribeComponent } from './scribe/scribe.component';
import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import {CrtComponent} from './crt/crt.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { AboutComponent } from './about/about.component';
let config = {
  apiKey: "AIzaSyDVPqa_ij3ih6nGKv7iGTk-ZTYClrVDEWM",
  authDomain: "project1-d49bb.firebaseapp.com",
  databaseURL: "https://project1-d49bb.firebaseio.com",
  projectId: "project1-d49bb",
  storageBucket: "project1-d49bb.appspot.com",
  messagingSenderId: "377486090912"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,SignupComponent, LoginComponent,CrtComponent, MenuComponent, ScribeComponent, HomeComponent, MyBlogComponent, PostComponent, ViewComponent, AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
