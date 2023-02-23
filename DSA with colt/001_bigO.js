/**
 * precise vocabularary to talk about code performance
 * discuss trade-off
 * debug code to identify parts of code that are inefficient
 * Let's count the number of simple operations the computer has to perform!
 * talk formally about how the runtime of an algorithm grows as the inputs grow
 * just care about fuzzy way
 * linear, quadratic, constant,

Simplify Big O
- Constants Don't Matter
- Smaller Terms Don't Matter

Big O Shorthands for Time complexity
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

Space complexity
auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

Logarithms

- log(value) = exponent -> 2^exponent = value
- who are?
  - search algo
  - efficient sorting algo
  - recursive sometimes involves log space complexity

*/

/*
?Question: write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
1 + 2 + 3 + ... + n = sum
addUpTo(6) // 21
add
*/

// way1 : O(N)Time
// way2: O(1)time

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// a bit math
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log("addUpTo 6 = 21", addUpTo(6));
