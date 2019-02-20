import { Component,Output, OnInit,EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-crt',
  templateUrl: './crt.component.html',
  styleUrls: ['./crt.component.css']
})
export class CrtComponent implements OnInit {
  @Output('onPostCreated')onPostCreated=new EventEmitter();
config:any;
title:string;
htmlContent:string;


constructor() {

this.config=
{"editable": true,
  /** The spellcheck property specifies whether the element is to have its spelling and grammar checked or not. */
  "spellcheck": true,        
  /**The translate property specifies whether the content of an element should be translated or not.*/
  
  /** Sets height of the editor */
  "height": "auto",
  /** Sets minimum height for the editor */
  "minHeight": "150px",
  /** Sets Width of the editor */
  "width": "auto",
  /** Sets minimum width of the editor */
  "enableToolbar":true,
  "showToolbar":false

}

   }

  ngOnInit() {
  }
  createPost()
  {
    firebase.firestore().settings({
timestampsInSnapshots:true


    });
  
  firebase.firestore().collection("post").add({
  
  title:this.title,
htmlContent:this.htmlContent,
  user:firebase.auth().currentUser.uid,
  
  }).then(()=>{this.onPostCreated.emit();});
  
  }
  
}



