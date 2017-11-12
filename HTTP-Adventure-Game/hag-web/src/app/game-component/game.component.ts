import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GameComponent {
  constructor(private router:Router){
  }
  
  public exit(): void {
    this.router.navigate(['/home']);
  }
}
