import { Character } from "./character";

export class Bad extends Character {
    public constructor(nom: string) {
        super(nom);
    }

    public toString(): string {
        return `I'm a bad, my name is ${this.nom}
            I have ${this.lifePoints} life points
            and ${this.strength} points of strength.
        `;
    }
}