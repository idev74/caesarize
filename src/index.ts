class Caesarize {
  alphabet: string
  capitalAlphabet: string
  result: string

  constructor () {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
    this.capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.result = ''
  }

  isCapital (letter: string): boolean {
    return letter === letter.toUpperCase()
  }

  caseCheck (isCapital: boolean): string {
    return isCapital ? this.capitalAlphabet : this.alphabet
  }

  shiftChar (char: string, shift: number, isEncrypt: boolean): string {
    const isCharCapital = this.isCapital(char)
    const letterCase = this.caseCheck(isCharCapital)
    const index = letterCase.indexOf(char)

    return index === -1
      ? char
      : letterCase[(index + (isEncrypt ? shift : -shift) + letterCase.length) % letterCase.length]
  }

  encrypt (text: string, shift: number): string {
    this.result = ''
    for (let i = 0; i < text.length; i++) {
      this.result += this.shiftChar(text[i], shift, true)
    }
    return this.result
  }

  decrypt (text: string, shift: number): string {
    this.result = ''
    for (let i = 0; i < text.length; i++) {
      this.result += this.shiftChar(text[i], shift, false)
    }
    return this.result
  }
}

export { Caesarize }
