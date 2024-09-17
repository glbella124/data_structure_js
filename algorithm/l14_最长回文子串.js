/**
 * 给你一个字符串 s，找到 s 中最长的回文子串
 *
 * 算法实现：中心扩展或动态规划
 *
 * 中心扩展:可以从每个字符和每两个字符之间的位置出发，向两边扩展，找到所有可能的回文子串，并记录最长的那个。
 */
function longestPalinedrome(s) {
  if (s.length === 0) return "";
  //   记录最长回文子串的起始和结束索引
  let start = 0;
  let end = 0;
  /**
   * 从中心位置left和right开始，向两边开始扩展，直到不再是回文
   * @param {*} left
   * @param {*} right
   */
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  }

  for (let i = 0; i < s.length; i++) {
    // 单中心
    const [left1, right1] = expandAroundCenter(i, i);
    // 双中心
    const [left2, right2] = expandAroundCenter(i, i + 1);
    // 比较当前找到的回文子串和以记录的最长回文子串，更新start和end
    if (right1 - left1 > end - start) {
      end = right1;
      start = left1;
    }
    if (right2 - left2 > end - start) {
      end = right2;
      start = left2;
    }
  }
  return s.substring(start, end + 1);
}
