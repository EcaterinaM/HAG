import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  src = 'assets/Audio/home.mp3';
  a = new Audio(this.src);
  constructor(private router: Router) {
   }

  public showLevels(): void {
    this.router.navigate(['/room-levels']);
  }
}
