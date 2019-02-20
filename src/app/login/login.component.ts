import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder, NgForm} from '@angular/forms';
import  {AuthService} from '../auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  fg:FormGroup;

  constructor(fb:FormBuilder, public authService:AuthService, public router:Router) {

    this.fg=fb.group({

      email:['',[Validators.required,Validators.minLength(8)]],
      password:['',[Validators.required]]



    });

   }

  ngOnInit() {
  }
  onlog(form:NgForm){
    let email:string=form.value.email;
    let password=form.value.password;
firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) =>{
  console.log(data);
  this.router.navigate(['/myBlog']);


});

  }

}
