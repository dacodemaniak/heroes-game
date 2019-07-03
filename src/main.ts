/**
 * @name Main
 * @abstract C'est ici le monde extérieur
 * @author Aélion
 * @version 1.0.0
 */

 import { Person } from './person';
import { Hero } from './characters-module/hero';
import { Bad } from './characters-module/bad';
import { Meet } from './characters-module/meet';
import { CharacterFactory } from './core/character-factory';
import { Character } from './characters-module/character';
import { Speech } from './core/speech';
import { ConsoleOutputStrategy } from './core/strategy/console-output-strategy';
import { HtmlOutputStrategy } from './core/strategy/html-output-strategy';
import { SpeechOutputStrategy } from './core/strategy/speech-output-strategy';

class Main {
    public run(): void {
        const jl: Person = new Person();
        const kevin: Person = new Person();

        jl.forname = 'Jean-Luc';
        kevin.forname = 'Kevin';

        jl.setBirthDate(new Date('1968-04-30'));
        kevin.setBirthDate(new Date('1981-12-06'));

        const batman: Person = new Person();
        batman.forname = 'Batman';

        console.log('Bonjour ' + jl.forname + '(' + jl.getAge() + ')');
        console.log('Salut ' + kevin.forname + '(' + kevin.getAge() + ')');
        console.log('Hola ' + batman.forname + '(' + batman.getAge() + ')');
    }

    public game(): void {
        
        const superman: Hero = <Hero> CharacterFactory.createCharacter('superman');

        CharacterFactory.type = 'Bad';
        const lexLuthor: Bad = <Bad> CharacterFactory.createWithStrength('Lex Luthor', 100);
        const joker: Bad = <Bad> CharacterFactory.createFullCharacter(
            'Joker',
            100,
            200
        );
        lexLuthor
            .setLifePoints(150);
    
        const batman: Hero = new Hero('Batman');

        // Initiate a meet
        const meet: Meet = new Meet(
            superman, 
            lexLuthor, 
            new SpeechOutputStrategy()
        );

    }
}

const app = new Main();
let button: any = document.getElementById('fight');

button.addEventListener(
    'click', 
    () => {
        app.game();
    }
);
