class Caesarize {
    constructor() {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.result = '';
    }

    isCapital(letter) {
        return letter === letter.toUpperCase();
    }

    caseCheck(isCapital) {
        return isCapital ? this.capitalAlphabet : this.alphabet;
    }

    shiftChar(char, shift, isEncrypt) {
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

    encrypt(text, shift) {
        for (let i = 0; i < text.length; i++) {
            this.result += this.shiftChar(text[i], shift, true);
        }
        return this.result;
    }

    decrypt(text, shift) {
        for (let i = 0; i < text.length; i++) {
            this.result += this.shiftChar(text[i], shift, false);
        }
        return this.result;
    }
}

module.exports = Caesarize;
