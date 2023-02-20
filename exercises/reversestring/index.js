// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//   reverse('') === ''
//   reverse('a') === 'a'

// My solution:
//time:  O(N^2) -> O(N)
//space: O(N)
// function reverse(str) {
//   let output = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     output.push(str[i]);
//   }
//   return output.join("");
// }

// Solution 1: which utlized the array.reverse()
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Solution 2: use For loop
// take each character and add it to the start of reversed
// function reverse(str) {
//   let reversed = "";
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return reversed;
// }

// Solution 3: use array helper -> array.reduce()
// condense them to a single string value
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
