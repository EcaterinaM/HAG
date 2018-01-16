import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  src = 'assets/Audio/home.mp3';
  a = new Audio(this.src);
  constructor() {
    this.a.play();
   }
}
