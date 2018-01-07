import { Component, ViewEncapsulation, Input } from '@angular/core';
import { GetLevelQuestionModel } from '../../models/getLevelQuestion.model';
import { LevelQuestionsResponse } from '../../models/levelQuestionsResponse.model';
import { Router } from '@angular/router';
import { QuestionsServices } from '../../services/questions.services';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LevelComponent {
  @Input() isLocked: boolean;
  @Input() planetName: string;
  @Input() click: boolean;

  planet: string;
  mercury11 = "red";
  mercury12 = "white";
  mercury13 = "white";
  mercury14 = "white";
  mercury15 = "white";
  mercury16 = "white";
  
  getLevelQuestionModel: GetLevelQuestionModel;
  QuestionsList:  Array<LevelQuestionsResponse>;
  Question : LevelQuestionsResponse;

  constructor(private router:Router, private service: QuestionsServices){}

  private addFilter(): any {
    if (this.isLocked) {
      return 'grayscale(100%)';
    }
  }

  //nu e folosita momentan daca nu o folosim o sa o stergem
  // aici luam lista cu toate intrebarile pt lumea si bulina aleasa
  getListQuestions(planetName:string,numberLevel: number):void{
    this.getLevelQuestionModel = new GetLevelQuestionModel(planetName,numberLevel);
    this.QuestionsList = new Array<LevelQuestionsResponse>();

    this.service.getQuestions(this.getLevelQuestionModel)
    .subscribe(
      (res : Array<LevelQuestionsResponse> ) => {
        this.QuestionsList = res;
        // de aici sa facem rutarea catre camera cu intrebari (?)
      });
  }


  // aici luam random question pt lumea si bulina aleasa
  getRandomQ(planetName:string,planetNumber:number,numberLevel: number):void{
    console.log('Suntem in Level')
    this.getLevelQuestionModel = new GetLevelQuestionModel(planetName,numberLevel);
    this.service.getRandomQuestion(this.getLevelQuestionModel)
    .subscribe(
      (res) => {
        console.log('subscribe');
        this.Question = new LevelQuestionsResponse(res);
          console.log('luam Id ul intrebarii si il rutam la start-game sa apara intrebarea');
          this.router.navigate(['/start-game',planetNumber,numberLevel, this.Question.QuestionId]);
          // de aici sa facem rutarea catre camera cu intrebari 
      });
  }

}
