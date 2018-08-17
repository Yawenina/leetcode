/**
 * @param {number} x
 * @return {number}
 */

const MAX_VALUE: number = 2147483647;
const MIN_VALUE: number = -2147483648;

const reverse = function(x: number): number {
  let res: number = 0;
  while (x !== 0) {
    res = res * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  return (res < MIN_VALUE || res > MAX_VALUE) ? 0 : res;
};

module.exports = reverse;
