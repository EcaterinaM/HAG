import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../../shared/constants/string.constants';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent{
  path = Constants.RoomLevelsPath;
  content = "Choose this answer";
  question = "What is the correct answer?";
}
