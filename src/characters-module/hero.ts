import { Character } from "./character";

export class Hero extends Character {
    public constructor(nom: string) {
        console.log('Hello, i am the hero constructor');
        super(nom);
    }

    public escape(): void {
        if (this.strength <= 25) {
            this.strength = 0;
            return;
        }
        this.strength = this.strength - 25;
    }
}