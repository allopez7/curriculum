/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (arr, i=0, max=arr[i]) => {
  if(arr.length === 0){
    max = '';
  }
  if(i === arr.length){
    return max;
  };
  if(arr[i] > max){
    max = arr[i];
  }
  return solution(arr, i+1, max);
}

module.exports = {
  solution,
};
