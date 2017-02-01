import { Injectable }from '@angular/core';

class Options {
  container: string;
  unit: string;
}

@Injectable()
export class CounterModule {
  quill: any;
  options: Options;
  container:any; 

  constructor(quill:any , options:Options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(this.options.container);
    quill.on('text-change', this.update.bind(this));
    this.update();  // Account for initial contents
  }

  calculate() {
    let text = this.quill.getText();
    if (this.options.unit === 'word') {
      text = text.trim();
      // Splitting empty text returns a non-empty array
      return text.length > 0 ? text.split(/\s+/).length : 0;
    } else {
      return text.length;
    }
  }
  
  update() {
    const length = this.calculate();
    let label = this.options.unit;
    if (length !== 1) {
      label += 's';
    }
    this.container.innerHTML = length + ' ' + label;
  }
}
