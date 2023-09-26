class Caesarize {
    private alphabet: string;
    private capitalAlphabet: string;
    private result: string;

    constructor() {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.result = '';
    }

    private isCapital(letter: string): boolean {
        return letter === letter.toUpperCase();
    }

    private caseCheck(isCapital: boolean): string {
        return isCapital ? this.capitalAlphabet : this.alphabet;
    }

    private shiftChar(char: string, shift: number, isEncrypt: boolean): string {
        const isCharCapital = this.isCapital(char);
        const letterCase = this.caseCheck(isCharCapital);
        const index = letterCase.indexOf(char);
        if (index === -1) {
            return char;
        }
        const newIndex = isEncrypt
            ? (index + shift) % letterCase.length
            : (index - shift + letterCase.length) % letterCase.length;
        return letterCase[newIndex];
    }

    encrypt(text: string, shift: number): string {
        this.result = '';
        for (let i = 0; i < text.length; i++) {
            this.result += this.shiftChar(text[i], shift, true);
        }
        return this.result;
    }

    decrypt(text: string, shift: number): string {
        this.result = '';
        for (let i = 0; i < text.length; i++) {
            this.result += this.shiftChar(text[i], shift, false);
        }
        return this.result;
    }
}

export default Caesarize;
