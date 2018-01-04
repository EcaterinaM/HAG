import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../../../shared/constants/string.constants';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit{
  private idPlanet: number;
  private path = Constants.RoomLevelsPath;
  private rightAnswer: number;

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPlanet = params['idPlanet'];
    })

    this.rightAnswer = this.idPlanet;
  }

  private setQuestionForPlanet() {
    return this.idPlanet + ' planet question';
  }

  private setContentForAnswer(numberOfAnswer: string) {
    return "Choose this answer " + numberOfAnswer;
  }

  private getAnswer(numberOfAnswer: number) {
    if (numberOfAnswer != this.rightAnswer) {
      console.log('Wrong!' + numberOfAnswer);
    } else {
      console.log('Correct: ' + this.rightAnswer + ' answer');    
    }

    this.router.navigate([Constants.RoomLevelsPath])
  }
}
