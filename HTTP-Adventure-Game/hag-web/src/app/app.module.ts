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
    BrowserModule,
    RatingModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
