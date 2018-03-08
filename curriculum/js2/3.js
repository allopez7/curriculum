/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, newArr=[], i=0, j=2) => {
  if(i === arr.length){
    return newArr;
  }
  if(j < arr[i]){
    if(arr[i]%j === 0){
      newArr.push(1)
      return solution(arr, newArr, i+1, j=2);
    }
    if(arr[i]%j != 0){
      newArr.push(arr[i]);
      return solution(arr, newArr, i+1, j=2);
    }
    return solution(arr, newArr, i, j+1);
  }
  return solution(arr, newArr, i+1, j=2);
};

module.exports = {
  solution,
};
