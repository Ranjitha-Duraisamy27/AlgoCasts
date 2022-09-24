// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution 1
function reverseInt1(n) {
    const isNegative = n < 0;
    let number = isNegative ? -(n) : n;
    let reverseNum = '';
    while (number > 0) {
        reverseNum += number % 10;
        number = Math.trunc(number / 10);
    }
    return isNegative ? -reverseNum : +reverseNum;
}


//solution 2
function reverseInt(n) {
    const sign = Math.sign(n);
    const number = n * sign;
    return +number.toString().split('').reverse().join('') * sign;
}

reverseInt(-51);

module.exports = reverseInt;
