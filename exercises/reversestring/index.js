// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution 1
function reverse1(str = 'hello') {
    let newStr = '';
    for (const character of str) {
        newStr = character + newStr;
    }
    return newStr;
}

module.exports = reverse;
//solution 2

function reverse2(str) {
    return str.split('').reverse().join('');
}


//Solution 3
function reverse(str) {
    return str.split('').reduce((reverse, character) => character + reverse, '');
}


module.exports = reverse;
