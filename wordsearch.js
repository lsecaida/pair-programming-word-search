function wordSearch(matrix, word) {
  // Check for empty matrix or empty word
  if (matrix.length === 0 || word.length === 0) {
    return false;
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Check horizontally
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col <= numCols - word.length; col++) {
      if (matrix[row].slice(col, col + word.length).join("") === word) {
        return true;
      }
    }
  }

  // Check vertically
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row <= numRows - word.length; row++) {
      let verticalWord = "";
      for (let i = row; i < row + word.length; i++) {
        verticalWord += matrix[i][col];
      }
      if (verticalWord === word) {
        return true;
      }
    }
  }

  return false;
}

module.exports = wordSearch;

// const wordSearch = (letters, word) => {
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

// module.exports = wordSearch
