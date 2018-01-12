import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../../../shared/constants/string.constants';
import { LevelQuestionsResponse } from '../../../shared/models/levelQuestionsResponse.model';
import { QuestionsServices } from '../../../shared/services/questions.services';
import { GetLevelQuestionModel } from '../../../shared/models/getLevelQuestion.model';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  questionId: string;

  private idPlanet: number;
  private path = Constants.RoomLevelsPath;
  Question: LevelQuestionsResponse;
  private arrayForRandom: Array<string> = new Array<string>();
  private arrayIndex: Array<number> = new Array<number>();

  private answer1: string;
  private answer2: string;
  private answer3: string;
  private answer4: string;
  private correctAnswerNumber: number;
  private checkAnswerUser: boolean;
  private answerUser = false;
  private getLevelQuestionModel: GetLevelQuestionModel;
  private idLevel: number;

  constructor(private route: ActivatedRoute, private router: Router, private service: QuestionsServices) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPlanet = params['idPlanet'];
      this.questionId = params['questionId'];
      this.idLevel = params['idLevel'];
    });
    this.answerUser = false;
    console.log("LA INCEPUT IDDDDDDDDD",this.idLevel);
    this.getAnswers();
  }

  getAnswers() {
     //facem request sa luat intrebarea cu id-ul primit
     this.service.getQuestionById(this.questionId)
     .subscribe(
       (res) => {
         this.Question = new LevelQuestionsResponse(res);
         console.log('INTREBARE',this.Question);
         let r = this.randomInt(0, 100);
         if (r % 2 === 0) {
           this.answer3 = this.Question.RightAnswer;
           this.answer1 = this.Question.FirstWrongAnswer;
           this.answer2 = this.Question.SecondWrongAnswer;
           this.answer4 = this.Question.ThirdWrongAnswer;
           this.correctAnswerNumber = 3;
         }else {
           this.answer4 = this.Question.RightAnswer;
           this.answer2 = this.Question.FirstWrongAnswer;
           this.answer3 = this.Question.SecondWrongAnswer;
           this.answer1 = this.Question.ThirdWrongAnswer;
           this.correctAnswerNumber = 4;
         }
       });
  }
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

  private getAnswer(numberOfAnswer: number) {
    this.answerUser = true;
    if (numberOfAnswer === this.correctAnswerNumber) {
      this.checkAnswerUser = true;
    } else {
      this.checkAnswerUser = false;
    }

    // this.router.navigate([Constants.RoomLevelsPath]);
  }

  private goToNextQuestion(): void {
    this.answerUser = false;
    this.idLevel = Number(this.idLevel) + 1;
    //TODO : de luat de pe backend cate intrebari are max si verificat cand e ultima sa facem rutare catre prima pagina
    //Numele la planeta
    this.getLevelQuestionModel = new GetLevelQuestionModel('Mercury', this.idLevel);
    this.service.getRandomQuestion(this.getLevelQuestionModel)
    .subscribe(
      (res) => {
        console.log('subscribe');
        this.getAnswers();
        this.Question = new LevelQuestionsResponse(res);
          this.router.navigate(['/start-game', this.idPlanet , this.idLevel, this.Question.QuestionId]);
      });

  }
}
