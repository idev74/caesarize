const { Caesarize } = require("../src/index.js");

console.log(Caesarize)
const caesarize = new Caesarize();
test("encrypts a string with spaces and punctuation", () => {
    expect(caesarize.encrypt("hello, world!", 1)).toBe("ifmmp, xpsme!");
});

test("encrypts a string with capital letters", () => {
    expect(caesarize.encrypt("MixEd cASe", 7)).toBe("TpeLk jHZl");
});

test("encrypts a string with a negative shift", () => {
    expect(caesarize.encrypt("hello, world!", -10)).toBe("xubbe, mehbt!");
});

test("encrypts a string with a shift of 0", () => {
    expect(caesarize.encrypt("hello, world!", 0)).toBe("hello, world!");
});

test("encrypts a string with a shift greater than 26", () => {
    expect(caesarize.encrypt("hello, world!", 27)).toBe("ifmmp, xpsme!");
});

test("decrypts a string with spaces and punctuation", () => {
    expect(caesarize.decrypt("ifmmp, xpsme!", 1)).toBe("hello, world!");
});

test("decrypts a string with capital letters", () => {
    expect(caesarize.decrypt("TpeLk jHZl", 7)).toBe("MixEd cASe");
});

test("decrypts a string with a negative shift", () => {
    expect(caesarize.decrypt("xubbe, mehbt!", -10)).toBe("hello, world!");
});

test("decrypts a string with a shift of 0", () => {
    expect(caesarize.decrypt("hello, world!", 0)).toBe("hello, world!");
});

test("decrypts a string with a shift greater than 26", () => {
    expect(caesarize.decrypt("spwwz, hzcwo!", 27)).toBe("rovvy, gybvn!");
});
