import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home-component/home.component";
import { RoomLevelsComponent } from "./components/room-levels-component/room-levels.component";
import { StartGameComponent } from "./components/start-game-component/start-game.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'home', component: HomeComponent },
    { path: 'start-game/:idPlanet/:idLevel', component: StartGameComponent},
    { path: 'room-levels', component: RoomLevelsComponent}
  ];
  
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);