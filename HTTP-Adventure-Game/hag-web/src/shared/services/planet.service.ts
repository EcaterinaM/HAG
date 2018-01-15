import { Injectable } from "@angular/core";

@Injectable()
export class PlanetServices {
    private planets: Array<any> = [0, 1, 1, 1, 1, 1, 1, 1, 1];
    private index: number;

    public setPlanetUnlocked(planetName: string) {
        if (planetName === 'Mercury') { this.index = 0; }
        if (planetName === 'Venus') { this.index = 1; }

        this.planets[this.index + 1] = 0;
    }

    public getPlanetsUnlocked() {
        return this.planets;
    }
}
