export class Constants {
    private static _strengthLostValue: number = 25;
    
    public static get STRENGTHLOSTVALUE(): number {
        return Constants._strengthLostValue;
    }

    public static getStrengthLostValue(): number {
        return Constants._strengthLostValue;
    }

    
}