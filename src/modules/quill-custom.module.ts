import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { QuillEditorComponent } from '../components/quill-editor.component';

@NgModule({
  declarations: [
    QuillEditorComponent
  ],
  imports: [CommonModule, QuillModule],
  exports: [QuillEditorComponent],
  providers: []
})

export class QuillCustomModule {
//  emptyArray: any[] = [];
//  @Output() modules = {
//    toolbar: [
//      ['strike'],        // toggled buttons
//      ['blockquote', 'code-block'],
//      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//
//      [{ 'color': this.emptyArray.slice() }, { 'background': this.emptyArray.slice() }],          // dropdown with defaults from theme
//      [{ 'font': this.emptyArray.slice() }],
//      [{ 'align': this.emptyArray.slice() }],
//
//      ['clean'],                                         // remove formatting button
//
//      ['link', 'image', 'video']                         // link and image, video
//    ]
//  }; 
}
