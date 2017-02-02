import { Component } from '@angular/core';
import { QuillComponent } from './components/quill/quill.component';

@Component({
  selector: 'app-root',
  template: `<h1 class="title">my app works!</h1>
            <my-quill-component></my-quill-component>`,
  styles: [`app-root h1{ color:#c0c0c0; }`]
})

export class AppComponent {
}
