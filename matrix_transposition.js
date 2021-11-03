const transpose = function(matrix) {
  // Put your solution here
  let newMatrix = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      newMatrix[col][row] = matrix[row][col];
    }
  }
  return newMatrix;
  
};



module.exports = transpose;