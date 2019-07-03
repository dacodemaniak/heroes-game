import { Hero } from "./hero";
import { Bad } from "./bad";

export class Meet {
    private hero: Hero;

    private bad: Bad;

    public constructor(hero: Hero, bad: Bad) {
        

        this.hero = hero;

        this.bad = bad;
        
        this._jouer();

        
    }

    private _jouer() {
        console.log(this.hero.getNom(), ' rencontre ', this.bad.getNom());

        // Une petite valeur aléatoire comprise entre 0 et 2
        let diceDrop: number = Math.floor(Math.random() * 3);
        let gameEnd: string;

        switch(diceDrop) {
            case 0:
                this._escapeFight();
                gameEnd = `${this.hero.getNom()} s'échappe`;
            break;

            case 1:
                this._winFight();
                gameEnd = `${this.hero.getNom()} gagne`;
            break;
            
            case 2:
                this._lostFight();
                gameEnd = `${this.hero.getNom()} perd`;
            break;
        }
        if (diceDrop === 0) {
            gameEnd = gameEnd + ' ' + this.hero.toString();
        } else {
            gameEnd = gameEnd + 
                ' ' + this.hero.toString() + '\n' + this.bad.toString();
        }

        setTimeout(() => {
            console.log(gameEnd);
        }, 3000);
        
    }

    private _escapeFight(): void {
        this.hero.escape();
    }

    private _winFight(): void {
        // If the hero wins...
        this.hero.winFight(this.bad);
    }

    private _lostFight(): void {
        // If the hero losts...
        this.hero.lostFight(this.bad);
    }
}