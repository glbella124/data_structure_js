/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 */

function reverse(x) {
  // 定义32位整数范围的上下限
  // 2147483647
  const INI_MAX = 2 ** 31 - 1;
  // -2147483648
  const INI_MIN = -(2 ** 31);
  //   获取数字的绝对值并反转
  let reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join(""),
    10
  );
  if (x < 0) reversed = -reversed;

  //   检查反转后是否在32位整数范围内
  if (reversed < INI_MIN || reversed > INI_MAX) return 0;

  return reversed
}

console.log(reverse(2147483640));

// 总结
// 时间复杂度: O(n)，其中 n 是整数的位数，因为需要进行字符串转换和处理。
// 空间复杂度: O(n)，因为需要额外的空间来存储字符串、字符数组以及反转后的结果。


// /**
//  * @param {number} x
//  * @return {number}
//  */
//  let reverse = function (x) {
//     if (x === 0) return 0

//     let reverseNum = 0
//     if (x < 0) {
//         x = Math.abs(x)
//         while (x > 0) {
//             reverseNum = reverseNum * 10 + x % 10
//             x = Math.floor(x / 10)
//         }
//         if(-reverseNum < Math.pow(-2,31)|| -reverseNum>Math.pow(2,31)-1){
//             return 0
//         }
//         return -reverseNum
//     }

//     if (x > 0) {
//         while (x > 0) {
//             reverseNum = reverseNum * 10 + x % 10
//             x = Math.floor(x / 10)
//         }
//         if(reverseNum < Math.pow(-2,31)|| reverseNum>Math.pow(2,31)-1){
//             return 0
//         }
//         return reverseNum
//     }

// };
