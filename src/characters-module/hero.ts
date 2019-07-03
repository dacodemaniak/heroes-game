import { Character } from "./character";
import { Constants } from "./../core/constants";
import { Bad } from "./bad";

export class Hero extends Character {
    public constructor(nom: string) {
        super(nom);
    }

    public escape(): void {
        if (this.strength <= Constants.STRENGTHLOSTVALUE) {
            this.strength = 0;
            return;
        }
        this.strength = this.strength - Constants.STRENGTHLOSTVALUE;
    }

    public winFight(bad: Bad): void {
        this.strength = this.strength + Math.ceil(bad.getStrength() * 0.1);

        bad.setStrength(
            bad.getStrength() - Math.ceil(bad.getStrength() * 0.1)
        );
    }

    public lostFight(bad: Bad): void {
        bad.setStrength(
            bad.getStrength() + Math.ceil(this.strength * 0.1)
        );
        
        this.strength = this.strength - Math.ceil(this.strength * .1);
    }
    public toString(): string {
        return `I'm a Hero, my name is ${this.nom}
            I have ${this.lifePoints} life points
            and ${this.strength} points of strength.
        `;
    }
}