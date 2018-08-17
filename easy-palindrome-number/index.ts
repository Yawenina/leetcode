const isPalindrome = function(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let res: number = 0;
  let temp: number = x;
  while (temp !== 0) {
    res = res * 10 + (temp % 10);
    temp = Math.trunc(temp / 10);
  }

  return x === res;
};
