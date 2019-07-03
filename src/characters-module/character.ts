import { Hero } from "./hero";

export abstract class Character {
    protected nom: string;

    protected strength: number;

    protected lifePoints: number;

    protected constructor(nom: string){
        this.nom = nom;
    }

    public getNom(): string {
        return this.nom;
    }

    public setStrength(strength: number): Character {
        this.strength = strength;
        
        return this;
    }

    public getStrength(): number {
        return this.strength;
    }

    public setLifePoints(lifePoints: number): Character {
        this.lifePoints = lifePoints;

        return this;
    }

    public getLifePoints(): number {
        return this.lifePoints;
    }

    public toString(): string {
        return this instanceof Hero ?
        `Hero's ready : ${this.nom} 
        - Force : ${this.getStrength()} 
        - Points de vie : ${this.getLifePoints()}` :
        `Bad's ready : ${this.nom} 
        - Force : ${this.getStrength()} 
        - Points de vie : ${this.getLifePoints()}`
    }
}