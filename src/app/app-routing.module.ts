import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
path:'',redirectTo:'home',pathMatch:'full'
},{
path:'home', component:HomeComponent


},
{path:'myBlog',
component:MyBlogComponent
},
{
path:'login', component:LoginComponent






},{path:'signup',component:SignupComponent},{

path:'**', redirectTo:'home',pathMatch:'full'

},
{path:'view:/postId', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
