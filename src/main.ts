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
        const superman: Hero = new Hero('Superman');
        superman
            .setLifePoints(100)
            .setStrength(100);
        

        const lexLuthor: Bad = new Bad('Lex Luthor');
        lexLuthor
            .setLifePoints(150)
            .setStrength(200);
    
        const batman: Hero = new Hero('Batman');

        // Initiate a meet
        const meet: Meet = new Meet(superman, lexLuthor);
        
        const joker: Bad = new Bad('Joker');
        joker.setLifePoints(150).setStrength(200);

    }
}

const app = new Main();
app.game();