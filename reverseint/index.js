// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let mod = 0;
  let sum = 0;
  let multiplier = n < 0 ? -1 : 1;
  n = Math.abs(n);

  while (n > 0) {
    mod = n % 10;
    sum = sum * 10 + mod;
    n = Math.floor(n / 10);
  }
  return sum * multiplier;
}

module.exports = reverseInt;
