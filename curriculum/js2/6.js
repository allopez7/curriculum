/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, newArr=[], i=0) => {
  if(i === arr.length){
    return newArr;
  }
  if(arr[i] > 5){
    newArr.push(arr[i]);
  }
  return solution(arr, newArr, i+1);
};

module.exports = {
  solution,
};
