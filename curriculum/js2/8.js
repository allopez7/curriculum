/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function(cb, newArr=[], i=0) {
    if(i === this.length){
      return newArr;
    }
    newArr.push(cb(this[i]));
    return this.gsMap(cb, newArr, i+1);
  };
};

module.exports = {
  solution,
};
