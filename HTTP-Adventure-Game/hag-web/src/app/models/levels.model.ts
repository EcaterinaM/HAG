
export class Levels{
    public planetName: string;
    public isLocked: boolean;

    constructor(_planetName :string, _isLocked: boolean){
        this.planetName = _planetName;
        this.isLocked = _isLocked;
    }
}