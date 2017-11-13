import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game-component/game.component';
import { HomeComponent } from './home-component/home.component';
import { LevelComponent } from '../shared/components/level-component/level.component';
import { StarsComponent } from '../shared/components/stars-component/stars.component';
import { RatingModule } from 'ngx-rating';
import { FormsModule } from '@angular/forms';
import { RoomLevelsComponent } from './game-component/room-levels-component/room-levels.component';
import { StartGameComponent } from './game-component/start-game-component/start-game.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'home', component: HomeComponent },  
  { path: 'game', component: GameComponent },
  { path: 'start-game', component: StartGameComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    LevelComponent,
    StarsComponent,
    RoomLevelsComponent,
    StartGameComponent
  ],
  imports: [RouterModule.forRoot( 
      appRoutes, { enableTracing: true } ),
    BrowserModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
