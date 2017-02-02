import {
  Component,
  AfterViewInit,
  ElementRef
 } from '@angular/core';
import Quill from '../quill/quill.register';

@Component({
  selector: 'app-editor-component',
  templateUrl: './editor.component.html',
  styleUrls: [
    '../../../node_modules/quill/dist/quill.bubble.css',
    '../../../node_modules/quill/dist/quill.snow.css',
    './editor.component.css'
  ]
})

export class EditorComponent implements AfterViewInit {
  editorElem: HTMLElement;
  quillEditor: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.editorElem = this.elementRef.nativeElement.children[0]
    this.quillEditor = new Quill(this.editorElem.children[0], {
      theme: 'snow',
      modules: {
          toolbar: {
              container: this.editorElem.children[1]
          }
      }
    });
  }

  onSubmit(): void {
      console.log(this.quillEditor.getContents());
  }
}
