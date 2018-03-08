/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, newArr=[], i=0) => {
  if(i === arr.length){
    return newArr;
  }
  if(arr[i]%2 != 0){
    newArr.push(0);
  }
  if(arr[i]%2 === 0){
    newArr.push(arr[i]);
  }
  return solution(arr, newArr, i+1);
};

module.exports = {
  solution,
};
