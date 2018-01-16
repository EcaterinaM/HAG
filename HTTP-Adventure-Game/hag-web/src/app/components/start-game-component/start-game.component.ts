import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../../../shared/constants/string.constants';
import { LevelQuestionsResponse } from '../../../shared/models/levelQuestionsResponse.model';
import { QuestionsServices } from '../../../shared/services/questions.services';
import { GetLevelQuestionModel } from '../../../shared/models/getLevelQuestion.model';
import { AnswersServices } from '../../../shared/services/answers.service';

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
  private planetName: string;
  private numberOfLevelForPlanet: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionsServices,
    private answersService: AnswersServices) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPlanet = params['idPlanet'];
      this.questionId = params['questionId'];
      this.idLevel = params['idLevel'];
    });
    this.answerUser = false;
    this.getAnswers(this.questionId);

  }

  private getAnswers(id: string): void {
     this.questionService.getQuestionById(id)
     .subscribe(
       (res) => {
         this.Question = new LevelQuestionsResponse(res);
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

  private randomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getAnswer(numberOfAnswer: number): void {
    this.planetName = this.questionService.getPlanetName(Number(this.idPlanet));
    this.answerUser = true;

    if (numberOfAnswer === this.correctAnswerNumber) {
      this.checkAnswerUser = true;
      this.answersService.setAnswer(this.planetName, this.idLevel - 1, true);
      console.log('aa');
      this.answersService.unblockNextPlanet(this.planetName);
    } else {
      this.checkAnswerUser = false;
      this.answersService.setAnswer(this.planetName, this.idLevel - 1, false);
    }
  }

  private goToNextQuestion(): void {
    this.answerUser = false;
    this.idLevel = Number(this.idLevel) + 1;
    this.planetName = this.questionService.getPlanetName(Number(this.idPlanet));
    this.numberOfLevelForPlanet = this.questionService.getNumberOfLevels(Number(this.idPlanet));

    if (this.idLevel > this.numberOfLevelForPlanet) {
      this.answersService.unblockNextPlanet(this.planetName);
      this.router.navigate(['/room-levels']);
    }else {
      this.getLevelQuestionModel = new GetLevelQuestionModel(this.planetName, this.idLevel);
      this.questionService.getRandomQuestion(this.getLevelQuestionModel)
      .subscribe(
        (res) => {
          this.Question = new LevelQuestionsResponse(res);
          this.getAnswers(this.Question.QuestionId);
          this.router.navigate(['/start-game', this.idPlanet , this.idLevel, this.Question.QuestionId]);
        });
    }
  }

}
