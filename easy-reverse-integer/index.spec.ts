/* ===== 正向测试 =====
* [x] 返回倒置的数字： 传入的正数；
* [x] 返回倒置的数字： 传入的负数；
*/

/* ===== 反向测试 =====
* [x] 传入的数字末尾为0（多个0）;
*/

/* ===== 异常测试 =====
* [] 传入的数字超出数字范围;
* [] 传出的数字超出数字范围;
*/
const reverseInteger = require('./index');

describe('reverse integer', function () {
  it('should pass this canary test', function () {
    expect(true).toBe(true);
  });

  it('should reverse input for positive number', function () {
    expect(reverseInteger(123)).toBe(321);
  });

  it('should reverse input for negative number', function () {
    expect(reverseInteger(-123)).toBe(-321);
  });

  it('should return 0 for exceed number', function () {
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = Math.pow(2, 31) * (-1);

    expect(reverseInteger(MAX_VALUE + 1)).toBe(0);
    expect(reverseInteger(MIN_VALUE - 1)).toBe(0);
  });
});
