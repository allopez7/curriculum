/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, i=0, gcd) => {
  if(i > a && i > b){
    return gcd;
  };
  if(a%i === 0 && b%i === 0){
    gcd = i;
  }
  return solution(a, b, i+1, gcd);
};

module.exports = {
  solution,
};
