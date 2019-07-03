import { Hero } from "./hero";
import { Bad } from "./bad";
import { OutputStrategy } from "src/core/strategy/output-strategy-interface";

export class Meet {
    private hero: Hero;

    private bad: Bad;

    private outputStrategy: OutputStrategy;

    public constructor(hero: Hero, bad: Bad, strategy: OutputStrategy) {
        
        this.outputStrategy = strategy;

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

            default:
                this._winFight();
                gameEnd = `${this.hero.getNom()} gagne`;
            break;
        }
        console.log('Lancer de dé : ' + diceDrop);

        if (diceDrop === 0) {
            gameEnd = gameEnd + ' ' + this.hero.toString();
        } else {
            gameEnd = gameEnd + 
                ' ' + this.hero.toString() + '\n' + this.bad.toString();
        }

        // Utiliser la stratégie pour la sortie
        this.outputStrategy.output(gameEnd);
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