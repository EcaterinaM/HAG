import { Injectable } from "@angular/core";
import { PlanetServices } from "./planet.service";

@Injectable()
export class AnswersServices {
   private mercury: Array<any> = [0, 0, 0, 0, 0, 0];
   private venus: Array<any> = [0, 0, 0, 0, 0, 0];
   private earth: Array<any> = [0, 0, 0, 0, 0, 0];
   private mars: Array<any> = [0, 0, 0, 0, 0, 0];
   private jupier: Array<any> = [0, 0, 0, 0, 0, 0];
   private saturn: Array<any> = [0, 0, 0, 0, 0, 0,0];
   private uranus: Array<any> = [0, 0, 0, 0, 0, 0,0];
   private neptun: Array<any> = [0, 0, 0, 0, 0, 0,0];
   private pluto: Array<any> = [0, 0, 0, 0, 0, 0,0];

   constructor(private planetService: PlanetServices) {}

   public setAnswer(planet: string, questionNumber: number, isCorrect: boolean) {
       if (planet === 'Mercury') {
           if (isCorrect) { this.mercury[questionNumber] = 1;} 
            else { this.mercury[questionNumber] = -1; }
       }
       if (planet === 'Venus') {
            if (isCorrect) { this.venus[questionNumber] = 1; } 
            else { this.venus[questionNumber] = -1; }
        }
        if (planet === 'Earth') {
            if (isCorrect) { this.earth[questionNumber] = 1; } 
            else { this.earth[questionNumber] = -1; }
        }
        if (planet === 'Mars') {
            if (isCorrect) { this.mars[questionNumber] = 1; } 
            else { this.mars[questionNumber] = -1; }
        }
        if (planet === 'Jupier') {
            if (isCorrect) { this.jupier[questionNumber] = 1; } 
            else { this.jupier[questionNumber] = -1; }
        }
        if (planet === 'Saturn') {
            if (isCorrect) { this.saturn[questionNumber] = 1; } 
            else { this.saturn[questionNumber] = -1; }
        }
        if (planet === 'Uranus') {
            if (isCorrect) { this.uranus[questionNumber] = 1; } 
            else { this.uranus[questionNumber] = -1; }
        }
        if (planet === 'Neptune') {
            if (isCorrect) { this.neptun[questionNumber] = 1; } 
            else { this.neptun[questionNumber] = -1; }
        }
        if (planet === 'Pluto') {
            if (isCorrect) { this.pluto[questionNumber] = 1; } 
            else { this.pluto[questionNumber] = -1; }
        }
   }

   public getPlanetAnswers(planet: string) {
    if (planet === 'Mercury') { return this.mercury; }
    if (planet === 'Venus') { return this.venus; }
    if (planet === 'Earth') { return this.earth; }
    if (planet === 'Mars') { return this.mars; }
    if (planet === 'Jupier') { return this.jupier; }
    if (planet === 'Saturn') { return this.saturn; }
    if (planet === 'Uranus') { return this.uranus; }
    if (planet === 'Neptune') { return this.neptun; }
    if (planet === 'Pluto') { return this.pluto; }
    
   }

   public getPlanetsList() {
       const planets = [this.mercury, this.venus, this.earth, this.mars, this.jupier, this.saturn, this.uranus, this.neptun, this.pluto];
       return planets;
   }

   public unblockNextPlanet(planet: string): any {
    //    if (planet === 'Mercury') {
    //         let countGreenFlags = 0;
    //         for (let i = 0; i < this.mercury.length; i++) {
    //             if (this.mercury[i] === 1) {
    //                 countGreenFlags++;
    //             }
    //         }
    //         if (countGreenFlags >= 4) { this.planetService.setPlanetUnlocked('Mercury'); }
    //         return false;
    //    }

        const planetVector = this.getPlanetAnswers(planet);
        let countGreenFlags = 0;
        for (let i = 0; i < planetVector.length; i++) {
            if (planetVector[i] === 1) {
                countGreenFlags++;
            }
        }
        if (countGreenFlags >= 4) { 
            this.planetService.setPlanetUnlocked(planet); 
        }
        return false;
   }
}
