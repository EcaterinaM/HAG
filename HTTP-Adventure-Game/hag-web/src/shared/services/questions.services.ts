import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GetLevelQuestionModel } from '../models/getLevelQuestion.model';
import { LevelQuestionsResponse } from '../models/levelQuestionsResponse.model';
import { PlanetNames, LevelNumber } from '../constants/string.constants';

@Injectable()

export class QuestionsServices {
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    backendUrl = "http://localhost:65360/api/questions";
    constructor(protected http: Http) {}

    private update = (res: Response | any) => {
      let items = [];
      if (res.text()) {
        items = res.json();
      }
      return items;
    }

    public getRandomQuestion(model: GetLevelQuestionModel) {
      return this.http.get(this.backendUrl + '/' + model.PlanetName + '/' + model.NumberLevel + '/random' ,
        { headers: this.headers }).map(this.update);
    }

    public getQuestionById(id: string) {
      return this.http.get(this.backendUrl + '/' + id,
          { headers: this.headers }).map(this.update);
    }

    public getQuestions(model: GetLevelQuestionModel ): Observable<LevelQuestionsResponse[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     return this.http.get(this.backendUrl + '/' + model.PlanetName + '/' + model.NumberLevel)
          .map((res => res.json()))
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getPlanetName(numberToCheck: number) : string{
      
      if(numberToCheck === 1){
        return PlanetNames.Mercury;
      }
      if(numberToCheck === 2){
        return PlanetNames.Venus;
      }
      if(numberToCheck === 3){
        return PlanetNames.Earth;
      }
      if(numberToCheck === 4){
        return PlanetNames.Mars;
      }
      if(numberToCheck === 5){
        return PlanetNames.Jupiter;
      }
      if(numberToCheck === 6){
        return PlanetNames.Saturn;
      }
      if(numberToCheck === 7){
        return PlanetNames.Uranus;
      }
      if(numberToCheck === 8){
        return PlanetNames.Neptune;
      }
      if(numberToCheck === 9){
        return PlanetNames.Pluto;
      }
      
    }

    public getNumberOfLevels(numberToCheck: number) : number{
      
      if(numberToCheck === 1){
        return LevelNumber.Mercury;
      }
      if(numberToCheck === 2){
        return LevelNumber.Venus;
      }
      if(numberToCheck === 3){
        return LevelNumber.Earth;
      }
      if(numberToCheck === 4){
        return LevelNumber.Mars;
      }
      if(numberToCheck === 5){
        return LevelNumber.Jupiter;
      }
      if(numberToCheck === 6){
        return LevelNumber.Saturn;
      }
      if(numberToCheck === 7){
        return LevelNumber.Uranus;
      }
      if(numberToCheck === 8){
        return LevelNumber.Neptune;
      }
      if(numberToCheck === 9){
        return LevelNumber.Pluto;
      }
      
    }
}