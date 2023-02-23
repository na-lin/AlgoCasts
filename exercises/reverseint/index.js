// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 0 -> 0
// reverse integer -> reverse string
// integer is positive or negative -> Math.sign()
// start with 0 ->

// function reverseInt(n) {
//   let reversed = n;

//   if (Math.sign(n)) {
//     reversed = n.toString().split("").reverse()
//   } else {
//     reversed = (n * -1).toString().split("").reverse()
//   }

//   // ? 500 -> 5 ???

//   return Math.sign(n) ? parseInt(reversed) : parseInt(reversed) * -1;
// }

function reverseInt(n) {
  // parseInt('0011-') -> 11
  let reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(1));

module.exports = reverseInt;
