// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(m, n) {
  let result = [];
  for (let i = 0; i < m; i++) {
    result.push([]);
  }

  let count = 1;
  let sr = 0;
  let sc = 0;
  let ec = n - 1;
  let er = m - 1;
  while (sr <= er && sc <= ec) {
    for (let i = sc; i <= ec; i++) {
      result[sr][i] = count;
      count++;
    }
    sr++;
    for (let i = sr; i <= er; i++) {
      result[i][ec] = count;
      count++;
    }
    ec--;
    for (let i = ec; i >= sc; i--) {
      result[er][i] = count;
      count++;
    }
    er--;
    for (let i = er; i >= sr; i--) {
      result[i][sc] = count;
      count++;
    }
    sc++;
  }
  return result;
}

console.log(matrix(4, 3));
module.exports = matrix;
