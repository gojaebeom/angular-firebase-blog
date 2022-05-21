import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [AppComponent, Header],
  imports: [BrowserModule, AppRoutingModule, PostsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
