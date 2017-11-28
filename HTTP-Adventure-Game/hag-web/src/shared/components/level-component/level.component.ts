import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LevelComponent {
  @Input() isLocked: boolean;
  @Input() planetName: string;
  planet: string;

 ngOnInit() {
    if (this.planetName == "Pluto"){
      this.planet = "./assets/Planets/Pluto.svg#pluto";
    } 
    else if (this.planetName == "Saturn"){
      this.planet = "./assets/Planets/Saturn.svg#saturn";
    } 
    else if (this.planetName == "Neptun"){
      this.planet = "./assets/Planets/Neptun.svg#neptun";
    } 
    else if (this.planetName == "Uranus"){
      this.planet = "./assets/Planets/Uranus.svg#uranus";
    } 
  }
}
