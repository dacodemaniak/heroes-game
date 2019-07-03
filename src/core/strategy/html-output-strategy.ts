import { OutputStrategy } from "./output-strategy-interface";

export class HtmlOutputStrategy implements OutputStrategy {
    public output(message: string): void {
        document.write(message);
    }
}