import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game-component/game.component';
import { HomeComponent } from './home-component/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'home', component: HomeComponent },  
  { path: 'game', component: GameComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent
  ],
  imports: [RouterModule.forRoot( 
      appRoutes, { enableTracing: true } ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
