import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {ContactComponent} from '../app/contact/contact.component';
import {BlogComponent} from '../app/blog/blog.component';
import {QuizComponent} from '../app/quiz/quiz.component';
import {BlogItemDetailsComponent} from '../app/components/blog-item-details/blog-item-details.component';
import {BlogHomeComponent} from '../app/blog-home/blog-home.component';
import {LoginComponent} from '../app/components/login/login.component';
import { HttpIntercepterBasicAuthService } from './services/http/services/interceptor-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { DataService } from './services/data.service';
const routes: Routes = [
  {
  path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
},

  {
    path: 'blog', 
  component: BlogHomeComponent
},

{
  path: 'quiz',
  component: QuizComponent,

},
{
  path: 'blog/detail/:id',
  component: BlogItemDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DataService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService,
      multi: true
    },
    ],
  
 
})
export class AppRoutingModule { }
