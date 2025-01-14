// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    const chars = {};
    for (const character of str) {
        chars[character] = !chars[character] ? 1 : chars[character] + 1;
    }
    let max = 0;
    let letter = '';
    for (const [key, val] of Object.entries(chars)) {
        if(max < val) {
            max = val;
            letter = key;
        }
    }
    return letter;
}

module.exports = maxChar;
