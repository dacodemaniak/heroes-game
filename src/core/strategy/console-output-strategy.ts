import { OutputStrategy } from "./output-strategy-interface";

export class ConsoleOutputStrategy implements OutputStrategy {
    public output(message: string): void {
        console.log(message);
    }
}