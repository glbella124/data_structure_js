/**
 * 无重复字符的最长子串
 * 
 * 给定一个字符串s,请你找出其中不含有重复字符的最长子串的长度。
 * 
 * 算法实现：滑动窗口（sliding window）算法
 */
function lengthOfLongestSubstring(s) {
  const charSet = new Set();  // 用于存储当前窗口的字符
  let left = 0;  // 左边界指针
  let maxLength = 0;  // 记录最长子串的长度

  for (let right = 0; right < s.length; right++) {
      // 如果当前字符已经在窗口中，则收缩窗口
      while (charSet.has(s[right])) {
          charSet.delete(s[left]);
          left++;
      }
      // 扩展窗口
      charSet.add(s[right]);
      // 更新最长子串的长度
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// 示例 1
console.log(lengthOfLongestSubstring("abcabcbb"));  // 输出: 3 （子串 "abc" 的长度为 3）

// 示例 2
console.log(lengthOfLongestSubstring("bbbbb"));  // 输出: 1 （子串 "b" 的长度为 1）

// 示例 3
console.log(lengthOfLongestSubstring("pwwkew"));  // 输出: 3 （子串 "wke" 的长度为 3）

// 滑动窗口算法步骤
// 初始化：使用两个指针 left 和 right 来表示窗口的左右边界，以及一个哈希集合 charSet 用于记录窗口中出现的字符。

// 扩展窗口：向右移动 right 指针，增加窗口的大小，并将字符加入哈希集合。

// 调整窗口：如果窗口中出现了重复字符，则不断移动 left 指针来缩小窗口，直到窗口中没有重复字符为止。

// 更新结果：每次调整窗口时，更新记录的最长子串长度。

// 时间和空间复杂度
// 时间复杂度: O(n)，其中 n 是字符串的长度。每个字符最多被处理两次（一次加入窗口，一次移出窗口），因此总体时间复杂度是线性的。
// 空间复杂度: O(min(n, m))，其中 m 是字符集的大小（例如 ASCII 字符集为 128 或 256）。空间复杂度主要由哈希集合 charSet 占用，最坏情况下集合的大小等于字符集的大小。