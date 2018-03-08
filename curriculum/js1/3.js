/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, str='') => {
  if(a <= 0){
    return str;
  };
  return solution(a-1, str+'hello');
};

module.exports = {
  solution,
};
