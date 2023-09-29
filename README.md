# Caesarize
[![npm version](https://img.shields.io/npm/v/caesarize.svg)](https://www.npmjs.com/package/caesarize)
[![npm downloads](https://img.shields.io/npm/dt/caesarize.svg)](https://www.npmjs.com/package/caesarize)

[Package available on NPM](https://www.npmjs.com/package/caesarize)

A simple node module built in Typescript that uses Caesar Cipher to encrypt and decrypt text!

## What is Caesar Cipher?
Caesar Cipher is a substitution cipher that alters text by shifting the alphabet by a certain number determined by the user. 

## Installation:
``` 
npm install caesarize
```

## Usage:
```
const caesarize = require("caesarize");
```

## Example Output
```javascript
Caesarize.encrypt("Hello, World!", 5); // "Mjqqt, Btwqi!"
Caesarize.encrypt("Hello, World!", -10); // "Xubbe, Mehbt!"

Caesarize.decrypt("Mjqqt, Btwqi!", 5); // "Hello, World!"
Caesarize.decrypt("Xubbe, Mehbt!", -10); // "Hello, World!"
```
