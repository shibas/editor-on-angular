import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-editor',
  template: '<quill-editor [modules]="modules">ここにquillが!!</quill-editor>',
  styleUrls: [
    '../../node_modules/quill/dist/quill.bubble.css',
    '../../node_modules/quill/dist/quill.snow.css'
  ]
})

export class QuillEditorComponent {
  modules:Object = {
    toolbar:['strike']
  };
}
