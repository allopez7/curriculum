/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (arr, i=0, sum=0) => {
  if(arr.length === 0){
    sum = '';
  }
  if(i === arr.length){
    return sum;
  }
  return solution(arr, i+1, sum + arr[i])
};

module.exports = {
  solution,
};
