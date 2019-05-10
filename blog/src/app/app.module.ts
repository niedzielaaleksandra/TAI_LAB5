import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { QuizComponent } from './quiz/quiz.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SelectizeComponent } from './components/selectize/selectize.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    QuizComponent,
    ContactComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    FilterPipe,
    SelectizeComponent,
    NewPostComponent,
    LoginComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
