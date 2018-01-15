import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Levels } from '../../models/levels.model';
import { Constants, PlanetNames } from '../../../shared/constants/string.constants';
import { GetLevelQuestionModel } from '../../../shared/models/getLevelQuestion.model';
import { LevelQuestionsResponse } from '../../../shared/models/levelQuestionsResponse.model';
import { AnswersServices } from '../../../shared/services/answers.service';
import { PlanetServices } from '../../../shared/services/planet.service';

@Component({
  selector: 'app-room-levels',
  templateUrl: './room-levels.component.html',
  styleUrls: ['./room-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomLevelsComponent implements OnInit {
  path = Constants.HomePath;
  private levels: Array<Levels> = [];
  public click: boolean = false;
  public planetName: string;
  constructor(private router: Router, private planetsService: PlanetServices) {}

  ngOnInit() {
    const planets = this.planetsService.getPlanetsUnlocked();
    console.log(planets);
    this.click = false;
    this.levels = new Array<Levels>();
    this.levels.push(new Levels("Mercury", planets[0]));
    this.levels.push(new Levels("Venus", planets[1]));
    this.levels.push(new Levels("Earth", planets[2]));
    this.levels.push(new Levels("Mars", planets[3]));
    this.levels.push(new Levels("Jupiter", planets[4]));
    this.levels.push(new Levels("Saturn", planets[5]));
    this.levels.push(new Levels("Uranus", planets[6]));
    this.levels.push(new Levels("Neptun", planets[7]));
    this.levels.push(new Levels("Pluto", planets[8]));
  }

  public goPlanetPage(planet): void {
    if (!planet.isLocked) {
      this.click = true;
      this.planetName = planet.planetName;
    }
  }

  public seeAllPlanets(): void {
    this.click = false;
  }

  private blockClickIfIsLocked(planet): any {
    if (planet.isLocked) {
      return 'none';
    }
  }
}
