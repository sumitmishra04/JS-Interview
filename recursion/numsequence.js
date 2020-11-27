function numseq(arr) {
  let i = 0;
  function helper(arr, i) {
    if (i === arr.length - 1) {
      return true;
    }
    return arr[i] + 1 === arr[i + 1] && helper(arr, i + 1);
  }
  return helper(arr, i);
}

function sum(arr) {
  let i = 0;
  let sum = 0;
  function helper(arr, i) {
    if (i === arr.length) {
      return 0;
    }
    sum = sum + arr[i];
    helper(arr, i + 1);
  }
  helper(arr, i);
  return sum;
}

console.log(numseq([1, 2, 3, 4]));
console.log(sum([]));
