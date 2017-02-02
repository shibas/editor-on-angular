import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import './rxjs-extensions';

import { EditorModule } from './modules/editor.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
