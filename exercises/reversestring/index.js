// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution 1
function reverse1(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
    return newStr;
}

module.exports = reverse;

//solution 2

function reverse(str) {
    return str.split('').reverse().join('');
}



module.exports = reverse;
