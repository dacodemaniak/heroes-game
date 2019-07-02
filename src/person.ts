/**
 * @name Person
 * @author Aélion
 * @version 1.0.0
 * @abstract Définit la classe Person
 */
export class Person {
    /**
     * @var string
     */
    public forname: string;

    /**
     * @var Date
     */
    private birthDate: Date;

    /**
     * @var number
     */
    private age: number = 99;

    /**
     * Définit la date de naissance de l'instance courante de la classe
     * @param birthDate
     * @return Person
     */
    public setBirthDate(birthDate: Date): Person {
        this.birthDate = birthDate;

        this._calculAge();

        return this;
    }

    /**
     * Returns age (in year) of this instance
     * @return number
     */
    public getAge(): number {
        return this.age;
    }

    /**
     * Difference in year between today and the birthDate
     * Store that value in age attribute
     * @return void
     */
    private _calculAge(): void {
        const today: Date = new Date();

        this.age = today.getFullYear() - this.birthDate.getFullYear();
    }
}