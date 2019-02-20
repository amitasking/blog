import { Component, OnInit,Input } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})

export class MyBlogComponent implements OnInit {
  @Input('post') post:any;
  user:any;
posts:any[]=[];


  constructor() { 
this.user=firebase.auth().currentUser;
firebase.firestore().settings({
  timestampsInSnapshots:true
  
  
      });
   

this.getPosts();
  }

  ngOnInit() {
  }
getPosts(){

firebase.firestore().collection("post").get().then((querysnapshot)=>{console.log(querysnapshot.docs);
this.posts=querysnapshot.docs;
})



}
onPostCreated(){
this.posts=[];
this.getPosts();



}
onDelete(){

  this.posts=[];
  this.getPosts();
    
  
  }
  
}
