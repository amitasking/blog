import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  fg:FormGroup;
  
  constructor(fb:FormBuilder) {
this.fg=fb.group({

firstName:['',[Validators.required]],
lastName:['',[Validators.required]],
email:['',[Validators.required]],
password:['',[Validators.required,Validators.minLength(8)]],
cpassword:['',[Validators.required]]

})

   }


  ngOnInit() {

  }
onsubmit(form:NgForm){
let email:string=form.value.email;

let password=form.value.password;
firebase.auth().createUserWithEmailAndPassword(email,password).then(Response=>console.log(Response));

}

}
