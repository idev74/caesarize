"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Caesarize = /** @class */ (function () {
    function Caesarize() {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.result = '';
    }
    Caesarize.prototype.isCapital = function (letter) {
        return letter === letter.toUpperCase();
    };
    Caesarize.prototype.caseCheck = function (isCapital) {
        return isCapital ? this.capitalAlphabet : this.alphabet;
    };
    Caesarize.prototype.shiftChar = function (char, shift, isEncrypt) {
        var isCharCapital = this.isCapital(char);
        var letterCase = this.caseCheck(isCharCapital);
        var index = letterCase.indexOf(char);
        if (index === -1) {
            return char;
        }
        var newIndex = isEncrypt
            ? (index + shift) % letterCase.length
            : (index - shift + letterCase.length) % letterCase.length;
        return letterCase[newIndex];
    };
    Caesarize.prototype.encrypt = function (text, shift) {
        this.result = '';
        for (var i = 0; i < text.length; i++) {
            this.result += this.shiftChar(text[i], shift, true);
        }
        return this.result;
    };
    Caesarize.prototype.decrypt = function (text, shift) {
        this.result = '';
        for (var i = 0; i < text.length; i++) {
            this.result += this.shiftChar(text[i], shift, false);
        }
        return this.result;
    };
    return Caesarize;
}());
exports.default = Caesarize;
