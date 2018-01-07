import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GetLevelQuestionModel } from '../models/getLevelQuestion.model';
import { LevelQuestionsResponse } from '../models/levelQuestionsResponse.model';

@Injectable()
/* folosim doar o singura clasa de servicii not to overkill */
export class QuestionsServices {
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    backendUrl = "http://localhost:65361/api/questions";
    
    constructor(protected http: Http) {}


    private update = (res: Response | any) => {
        let items = [];
        if (res.text()) {
          items = res.json();
        }
        return items;
      }
    
      public getRandomQuestion(model: GetLevelQuestionModel) {
      return this.http.get(this.backendUrl+ '/' + model.PlanetName + '/' + model.NumberLevel + '/random' , 
        { headers: this.headers }).map(this.update);
      }

      public getQuestionById(id: string) {
        return this.http.get(this.backendUrl+ '/' + id, 
          { headers: this.headers }).map(this.update);
        }
  


    public getQuestions(model: GetLevelQuestionModel ): Observable<LevelQuestionsResponse[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     return this.http.get(this.backendUrl+ '/' + model.PlanetName + '/' + model.NumberLevel)
          .map((res=> res.json()))
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
  
}   