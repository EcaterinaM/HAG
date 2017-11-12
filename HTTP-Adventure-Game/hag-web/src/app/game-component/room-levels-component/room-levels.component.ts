import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-levels',
  templateUrl: './room-levels.component.html',
  styleUrls: ['./room-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomLevelsComponent {
  public levels = [1,2];
 
  constructor(private router:Router){
  }
  
  // public startGame():void{
  //   console.log('a');
  //   this.router.navigate(['/start-game']);
  // }
}
