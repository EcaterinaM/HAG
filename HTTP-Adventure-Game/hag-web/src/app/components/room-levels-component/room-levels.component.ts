import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Levels } from '../../models/levels.model';
import { Constants } from '../../../shared/constants/string.constants';

@Component({
  selector: 'app-room-levels',
  templateUrl: './room-levels.component.html',
  styleUrls: ['./room-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomLevelsComponent implements OnInit{
  path = Constants.HomePath;
  private levels: Array<Levels> = [];
  constructor(private router:Router){}

  ngOnInit(): void {
    this.levels = new Array<Levels>();
    this.levels.push(new Levels(1,false));
    this.levels.push(new Levels(2,false));
    this.levels.push(new Levels(3,true));
    this.levels.push(new Levels(4,true));
    this.levels.push(new Levels(5,true));
    this.levels.push(new Levels(6,true));
    this.levels.push(new Levels(7,true));
    this.levels.push(new Levels(8,true));
  }
  private startLevel():void{
    this.router.navigate([Constants.StartGamePath]) 
  }
}
