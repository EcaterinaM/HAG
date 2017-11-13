
export class Levels{
    public levelNumber: number;
    public isLocked: boolean;

    constructor(_levelNumber :number, _isLocked: boolean){
        this.levelNumber = _levelNumber;
        this.isLocked = _isLocked;
    }
}