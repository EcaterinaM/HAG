import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LevelComponent } from '../shared/components/level-component/level.component';
import { StarsComponent } from '../shared/components/stars-component/stars.component';
import { RatingModule } from 'ngx-rating';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HomeComponent } from './components/home-component/home.component';
import { RoomLevelsComponent } from './components/room-levels-component/room-levels.component';
import { StartGameComponent } from './components/start-game-component/start-game.component';
import { BackComponent } from '../shared/components/back-component/back.component';
import { ButtonAnswerComponent } from '../shared/components/button-answer-component/button-answer.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsServices } from '../shared/services/questions.services';
import { AnswersServices } from '../shared/services/answers.service';
import { PlanetServices } from '../shared/services/planet.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LevelComponent,
    StarsComponent,
    RoomLevelsComponent,
    StartGameComponent,
    BackComponent,
    ButtonAnswerComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    RatingModule,
    FormsModule,
    routing
  ],
  providers: [QuestionsServices, AnswersServices, PlanetServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
