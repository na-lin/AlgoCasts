// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// edge case:
//  "" -> true
//  "a" -> true

// Solution 1:
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// solution 2 : array.every()
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;

//My solution
// 1. way to reverse the input string
// 2. compare the input string with the reversed one
// return true/false

// O(N)TS
// Use a for loop -> time
// variable to store reversed string -> space
// function palindrome(str) {
//   let reversed = str.split("").reverse(); // O(N)TS

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== reversed[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// O(N)time, O(1)space
// function palindrome(str) {
//   let i = 0;
//   let j = str.length - 1;

//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }
