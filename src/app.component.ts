import { Component } from '@angular/core';
import { EditorComponent } from './components/editor/editor.component';

@Component({
  selector: 'app-root',
  template: `<h1>Contents Editor</h1> 
            <app-editor-component></app-editor-component>`,
  styles: [`h1{ color:#c0c0c0; }`]
})

export class AppComponent {
}
