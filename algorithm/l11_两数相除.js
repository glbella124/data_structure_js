/**
 * 两数相除
 * 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
 * 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
 * 返回被除数 dividend 除以除数 divisor 得到的 商 。
 *
 * 算法实现：二分法和位移运算
 */
function divide(dividend, divisor) {
  // 处理特殊情况,判断被除数范围,避免溢出
  if (dividend === -Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) - 1;
  }

  //   确定符号，避免负负得正
  const isNegative = dividend < 0 !== divisor < 0;
  //   取绝对值，避免负数运算的麻烦
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let result = 0;
  //   使用位移和减法来逼近结果
  while (a >= b) {
    let temp = b;
    let multiple = 1;
    while (a >= temp << 1) {
      temp <<= 1;
      multiple <<= 1;
    }
    // 减去倍增后的除数部分，当前倍数相加
    a -= temp;
    result += multiple;
  }
  return isNegative ? -result : result;
}
console.log(divide(20,7));

// 时间复杂度: 倍增过程以对数方式增长，O(logn)
// 空间复杂度：只需要几个变量来存储中间结果，不需要额外的空间

