export class Speech {
    private synthesis: any = window.speechSynthesis;

    public speech(message: string): void {
        if ('speechSynthesis' in window) {
            let synthese: any = new SpeechSynthesisUtterance();

            var voices = this.synthesis.getVoices();
            synthese.voice = voices[0];

            console.log(JSON.stringify(voices));

            synthese.voiceURI = 'native';
            synthese.pitch = 50;
            synthese.volume = 1;
            synthese.rate = .8;
            synthese.lang = 'en-EN';
            synthese.text = message;

            this.synthesis.speak(synthese);
        } else {
            console.error('Well, i\'m not able to speak!');
        }
    }
}