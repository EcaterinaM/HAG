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
  public click:boolean = false;
  public planetName:string;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.click = false;
    this.levels = new Array<Levels>();
    this.levels.push(new Levels("Mercury",true));
    this.levels.push(new Levels("Venus",true));    
    this.levels.push(new Levels("Earth",false));
    this.levels.push(new Levels("Mars",true));
    this.levels.push(new Levels("Jupiter",false));
    this.levels.push(new Levels("Saturn",false));
    this.levels.push(new Levels("Uranus",true));
    this.levels.push(new Levels("Neptun",true));
    this.levels.push(new Levels("Pluto",false));
  }

  private startLevel():void{
    this.router.navigate([Constants.StartGamePath]) 
  }

  public goPlanetPage(planet): void{
    this.click = true;
    this.planetName = planet.planetName;
    console.log(this.planetName);
  }

  public seeAllPlanets(): void{
    this.click = false;
  }
}
