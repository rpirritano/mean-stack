import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
// standard to use "on before the action such as onAddPost()"
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLAreaElement) {
    // console.dir(postInput);
    // this.newPost = postInput.value;
    this.newPost = this.enteredValue;
  }

}
