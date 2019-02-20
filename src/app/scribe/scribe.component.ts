import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-scribe',
  templateUrl: './scribe.component.html',
  styleUrls: ['./scribe.component.css']
})
export class ScribeComponent implements OnInit {
  loggedIn:boolean=true;
user:any;
 
constructor() {
this.user=firebase.auth().currentUser;    
if(this.user){
  this.loggedIn=true;
}
else{this.loggedIn=false;


}
     
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    this.loggedIn=true;
  }
  else{this.loggedIn=false;
  
  
  }
       
  
}


)

}



  ngOnInit() {
  }

  logout(){
firebase.auth().signOut();


  }
}
