import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../../../shared/constants/string.constants';
import { LevelQuestionsResponse } from '../../../shared/models/levelQuestionsResponse.model';
import { QuestionsServices } from '../../../shared/services/questions.services';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit{
  questionId : string;
  
  private idPlanet: number;
  private path = Constants.RoomLevelsPath;
  private rightAnswer: number;
  Question : LevelQuestionsResponse;
  private arrayForRandom : Array<string> = new Array<string>();
  private arrayIndex : Array<number> = new Array<number>();
  
  private answer1: string;
  private answer2: string;
  private answer3: string;
  private answer4: string;

  constructor(private route: ActivatedRoute, private router:Router,private service: QuestionsServices) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPlanet = params['idPlanet'];
      this.questionId = params['questionId'];
    })

    this.rightAnswer = this.idPlanet;

    //facem request sa luat intrebarea cu id-ul primit
    this.service.getQuestionById(this.questionId)
    .subscribe(
      (res) => {
        this.Question = new LevelQuestionsResponse(res);
        console.log("intrebarea primita dupa getbyid", this.Question.FirstWrongAnswer);
        
        ///randomizam pozitia intrebarii corecte
        let r = this.randomInt(0,100);
        if(r%2==0){
          this.answer3 = this.Question.RightAnswer;
          this.answer1 = this.Question.FirstWrongAnswer;
          this.answer2 = this.Question.SecondWrongAnswer;
          this.answer4 = this.Question.ThirdWrongAnswer;
        }else{
          this.answer4 = this.Question.RightAnswer;
          this.answer2 = this.Question.FirstWrongAnswer;
          this.answer3 = this.Question.SecondWrongAnswer;
          this.answer1 = this.Question.ThirdWrongAnswer;
          
        }
      });
  }

  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

  // private setQuestionForPlanet() {
  //   return this.idPlanet + ' planet question';
  // }

  // private setContentForAnswer(numberOfAnswer: string) {
  //   return "Choose this answer " + numberOfAnswer;
  // }

  private getAnswer(numberOfAnswer: number) {
    if (numberOfAnswer != this.rightAnswer) {
      console.log('Wrong!' + numberOfAnswer);
    } else {
      console.log('Correct: ' + this.rightAnswer + ' answer');    
    }

    this.router.navigate([Constants.RoomLevelsPath])
  }
}
