import { OutputStrategy } from "./output-strategy-interface";
import { Speech } from "../speech";

export class SpeechOutputStrategy implements OutputStrategy {
    public output(message: string): void {
        let speech: Speech = new Speech();
        speech.speech(message);
    }
}