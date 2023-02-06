
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if ( (matrix == undefined) || (matrix.length == 0) ) return [];
  let numbArr = [];
  for (let i = 0; i < matrix.length; i++ ) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        numbArr.push(matrix[i][j])
      } else {
         numbArr.push(matrix[i][matrix[i].length - j - 1]);
      }
    }
    
  }
   return numbArr;
}