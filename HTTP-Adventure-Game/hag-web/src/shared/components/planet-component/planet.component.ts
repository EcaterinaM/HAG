import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanetComponent implements OnInit {
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
    else if (this.planetName == "Earth"){
      this.planet = "./assets/Planets/Earth.svg#earth";
    } 
    else if (this.planetName == "Jupiter"){
      this.planet = "./assets/Planets/Jupiter.svg#jupiter";
    } 
    else if (this.planetName == "Mars"){
      this.planet = "./assets/Planets/Mars.svg#mars";
    } 
    else if (this.planetName == "Mercury"){
      this.planet = "./assets/Planets/Mercury.svg#mercury";
    } 
    else if (this.planetName == "Venus"){
      this.planet = "./assets/Planets/Venus.svg#venus";
    } 
  }

}
