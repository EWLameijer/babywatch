import { Component, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'bw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'babywatch';
  constructor(@Inject(DOCUMENT) private _document: Document) {}
  toggleTheme() {
    this._document.body.classList.toggle("dark-theme");
  }
}
