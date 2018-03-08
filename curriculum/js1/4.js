/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, string, str='') => {
  if(n <= 0){
    return str;
  }
  return solution(n-1, string, str+string);
};

module.exports = {
  solution,
};
