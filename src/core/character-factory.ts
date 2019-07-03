import { Character } from "./../characters-module/character";
import { Hero } from "./../characters-module/hero";
import { Bad } from "./../characters-module/bad";

export class CharacterFactory {
    public static type: string = 'Hero';

    public static createCharacter(nom: string): Character {
        if (CharacterFactory.type == 'Hero'){
            return new Hero(nom).setLifePoints(100).setStrength(100);
        }
        return new Bad(nom).setLifePoints(100).setStrength(100);
    }

    public static createWithStrength(
        nom: string, 
        strength: number
    ): Character {
        const character = CharacterFactory.createCharacter(nom);
        character.setStrength(strength);

        return character;
    }

    public static createFullCharacter(
        nom: string,
        strength: number,
        lifePoints: number
    ): Character {
        const character = CharacterFactory.createCharacter(nom);
        character
            .setStrength(strength)
            .setLifePoints(lifePoints);
        return character;
    }
}