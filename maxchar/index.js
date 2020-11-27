// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let max = -Infinity;
  let maxKey = "s";
  str.split("").forEach((element) => {
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
    if (max < obj[element]) {
      maxKey = element;
      max = obj[element];
    }
  });
  return maxKey;
}

module.exports = maxChar;
