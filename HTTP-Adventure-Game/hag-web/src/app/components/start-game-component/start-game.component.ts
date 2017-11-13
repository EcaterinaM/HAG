import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent{
  constructor(private router:Router){
  }

  public routeToHomepage(): void {
    this.router.navigate(['/home']);
  }
}
