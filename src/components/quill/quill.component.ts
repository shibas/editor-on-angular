import {
  Component,
  AfterViewInit,
  ElementRef
 } from '@angular/core';
import Quill from './quill.register';

@Component({
  selector: 'my-quill-component',
  template: '<div></div><div id="counter"></div>',
  styleUrls: [
    '../../../node_modules/quill/dist/quill.bubble.css',
    '../../../node_modules/quill/dist/quill.snow.css',
  ]
})

export class QuillComponent implements AfterViewInit {
  editorElem: HTMLElement;
  quillEditor: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.editorElem = this.elementRef.nativeElement.children[0];
    this.quillEditor = new Quill(this.editorElem, {
      theme: 'snow',
      modules: {
        counter: {
          container: '#counter',
          unit: 'word'
        }
      }
    });
  }
}
