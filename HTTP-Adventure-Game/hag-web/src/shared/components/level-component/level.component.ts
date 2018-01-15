import { Component, ViewEncapsulation, Input } from '@angular/core';
import { GetLevelQuestionModel } from '../../models/getLevelQuestion.model';
import { LevelQuestionsResponse } from '../../models/levelQuestionsResponse.model';
import { Router } from '@angular/router';
import { QuestionsServices } from '../../services/questions.services';
import { AnswersServices } from '../../services/answers.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LevelComponent implements OnInit {
  @Input() isLocked: boolean;
  @Input() planetName: string;
  @Input() click: boolean;

  planet: string;
  mercury = ['white', 'white', 'white', 'white', 'white', 'white'];
  venus = ['white', 'white', 'white', 'white', 'white', 'white'];
  earth = ['white', 'white', 'white', 'white', 'white', 'white'];
  mars = ['white', 'white', 'white', 'white', 'white', 'white'];
  jupiter = ['white', 'white', 'white', 'white', 'white', 'white'];
  saturn = ['white', 'white', 'white', 'white', 'white', 'white','white'];
  uranus = ['white', 'white', 'white', 'white', 'white', 'white', 'white'];
  neptun = ['white', 'white', 'white', 'white', 'white', 'white', 'white'];
  pluto = ['white', 'white', 'white', 'white', 'white', 'white','white'];
  
  getLevelQuestionModel: GetLevelQuestionModel;
  QuestionsList:  Array<LevelQuestionsResponse>;
  Question: LevelQuestionsResponse;

  ngOnInit() {
    console.log('ng',this.planetName);
    // this.setColoursAllPlanets();
    this.setColours('Mercury', this.mercury);
    this.setColours('Venus', this.venus);
    this.setColours('Earth', this.earth);
    this.setColours('Mars', this.mars);
  }
  constructor(private router: Router, private service: QuestionsServices, private answerService: AnswersServices){
      console.log('cnst',this.planetName);
  }

  private addFilter(): any {
    if (this.isLocked) {
      return 'grayscale(100%)';
    }
  }

  public setColoursAllPlanets() {
    this.setColours('Mercury', this.mercury);
    this.setColours('Venus', this.venus);
    this.setColours('Earth', this.earth);
    this.setColours('Mars', this.mars);
    this.setColours('Jupiter', this.jupiter);
    this.setColours('Saturn', this.saturn);
    this.setColours('Uranus', this.uranus);
    this.setColours('Neptune', this.neptun);
    this.setColours('Pluto', this.pluto);
  }

  private setColours(planetName: string, planetVector: Array<any>) {
    const mercuryBinar = this.answerService.getPlanetAnswers(planetName);
    for (let i = 0; i < mercuryBinar.length; i ++) {
      if (mercuryBinar[i] === -1) {
        planetVector[i] = 'red';
      }
      if (mercuryBinar[i] === 1) {
        planetVector[i] = 'green';
      }
    }
  }

  getListQuestions(planetName: string, numberLevel: number): void {
    this.getLevelQuestionModel = new GetLevelQuestionModel(planetName, numberLevel);
    this.QuestionsList = new Array<LevelQuestionsResponse>();

    this.service.getQuestions(this.getLevelQuestionModel)
    .subscribe(
      (res: Array<LevelQuestionsResponse> ) => {
        this.QuestionsList = res;
      });
  }

  // aici luam random question pt lumea si bulina aleasa
  getRandomQ(planetName: string, planetNumber: number, numberLevel: number): void {
    this.getLevelQuestionModel = new GetLevelQuestionModel(planetName, numberLevel);
    this.service.getRandomQuestion(this.getLevelQuestionModel)
    .subscribe(
      (res) => {
          this.Question = new LevelQuestionsResponse(res);
          this.router.navigate(['/start-game', planetNumber, numberLevel, this.Question.QuestionId]);
      });
  }

}
