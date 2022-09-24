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
function palindrome(str) {
    let isPalindrome = true;
    for(let i = 0; i < str.length / 2; i++) {
        const first = str[i];
        const last = str[str.length - (i + 1)];
        if(first !== last) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}


module.exports = palindrome;
