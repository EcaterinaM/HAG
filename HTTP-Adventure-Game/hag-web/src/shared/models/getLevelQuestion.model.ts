export class GetLevelQuestionModel {
    public PlanetName: string;
    public NumberLevel: number;

    constructor(planetName: string, numberLevel: number) {
        this.PlanetName = planetName;
        this.NumberLevel = numberLevel;
    }

}
