/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, str='', i=0) => {
  if(i === a){
    return str;
  };
  return solution(a, str+'hello', i+1);
};

module.exports = {
  solution,
};
