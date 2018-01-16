import { Injectable } from "@angular/core";

@Injectable()
export class PlanetServices {
    private planets: Array<any> = [0, 1, 1, 1, 1, 1, 1, 1, 1];
    private index: number;

    public setPlanetUnlocked(planetName: string) {
        if (planetName === 'Mercury') { this.index = 0; }
        if (planetName === 'Venus') { this.index = 1; }
        if (planetName === 'Earth') { this.index = 2; }
        if (planetName === 'Mars') { this.index = 3; }
        if (planetName === 'Jupiter') { this.index = 4; }
        if (planetName === 'Saturn') { this.index = 5; }
        if (planetName === 'Uranus') { this.index = 6; }
        if (planetName === 'Neptune') { this.index = 7; }
        if (planetName === 'Pluto') { this.index = 8; }
        this.planets[this.index + 1] = 0;
    }

    public getPlanetsUnlocked() {
        return this.planets;
    }
}
