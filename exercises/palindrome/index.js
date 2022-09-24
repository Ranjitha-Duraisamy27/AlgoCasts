// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//solution 1
function palindrome1(str) {
    return  str.split('').reverse().join('') === str;
}

//solution 2
function palindrome2(str) {
    let isPalindrome = true;
    for(let i = 0; i < str.length / 2; i++) {
        const firstltr = str[i];
        const secondLtr = str[str.length - (i + 1)];
        if(firstltr !== secondLtr) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

//solution 3
function palindrome(str) {
    return str.split('').every((character, index) => character === str[str.length - index - 1]);
}

module.exports = palindrome;
