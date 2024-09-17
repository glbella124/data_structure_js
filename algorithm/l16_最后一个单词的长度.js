/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串
 *
 */
function lengthOfLastWord(s) {
  // 去除尾部空格
  let length = s.length;
  let i = length - 1;

  if (i < 0) return 0;

  // 跳过尾部空格,倒退着看
  while (i >= 0 && s[i] === "") {
    i--;
  }

  // 计算最后一个单词的长度
  let lastWord = 0;
  while (i >= 0 && s[i] !== "") {
    lastWord++;
    i--;
  }
  return lastWord;
}

console.log(lengthOfLastWord("Hello World"));
// 代码解析：
// 1.跳过尾部空格：从字符串末尾开始，使用 while 循环跳过所有的空格字符。
// 2.计算最后一个单词的长度：一旦找到最后一个非空格字符，继续向前遍历，
// 计算直到遇到空格或字符串开头的字符数，这就是最后一个单词的长度。

//时间复杂度 ：遍历字符串一次，O(n)
// 空间复杂度 : 只使用了几个常量空间来存储变量 O(1)
