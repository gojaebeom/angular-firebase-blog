import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PostListComponent, PostDetailComponent],
  exports: [],
})
export class PostsModule {}
