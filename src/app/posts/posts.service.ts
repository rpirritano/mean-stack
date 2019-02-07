import { Post } from './post.model';
import { Injectable } from '@angular/core';

// alternative way to perform DI instead of adding it to app.module.ts
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }
}
