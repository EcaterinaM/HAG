import { Injectable } from "@angular/core";
import { PlanetServices } from "./planet.service";

@Injectable()
export class AnswersServices {
   private mercury: Array<any> = [0, 0, 0, 0, 0, 0];
   private venus: Array<any> = [0, 0, 0, 0, 0, 0];

   constructor(private planetService: PlanetServices) {}

   public setAnswer(planet: string, questionNumber: number, isCorrect: boolean) {
       if (planet === 'Mercury') {
           if (isCorrect) {
                this.mercury[questionNumber] = 1;
            } else {
                this.mercury[questionNumber] = -1;
            }
       }

       if (planet === 'Venus') {
            if (isCorrect) {
                this.venus[questionNumber] = 1;
            } else {
                this.venus[questionNumber] = -1;
            }
        }
   }

   public getPlanetAnswers(planet: string) {
    if (planet === 'Mercury') {
       return this.mercury;
    }

    if (planet === 'Venus') {
        return this.venus;
     }
   }

   public getPlanetsList() {
       const planets = [this.mercury, this.venus];
       return planets;
   }

   public unblockNextPlanet(planet: string): any {
       let countGreenFlags = 0;
       for (let i = 0; i < this.mercury.length; i++) {
           if (this.mercury[i] === 1) {
               countGreenFlags++;
           }
       }
       console.log(countGreenFlags);
       if (countGreenFlags >= 4) {
           this.planetService.setPlanetUnlocked('Mercury');
       }
       return false;
   }
}
