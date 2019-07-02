import { Hero } from "./hero";
import { Bad } from "./bad";

export class Meet {
    private hero: Hero;
    private bad: Bad;

    public constructor(hero: Hero, bad: Bad) {
        this.hero = hero;
        this.bad = bad;

        console.log(this.hero.getNom(), ' rencontre ', this.bad.getNom());
    }
}