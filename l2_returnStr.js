// 无重复字符的最长子串
let str = "abcabcbb";

// 方法1
// 该题是找出没有重复值出现的字串的长度，
// 所以将没有重复的值按顺序放入到新数组temp中，
// 当出现重复数字时，则表示以temp的第一个元素的字串出现了重复字符，
// 重新以第二个元素为开头继续往下寻找。在删除第一个元素时，要注意的点s，
// 是在for循环中，要将i的值恢复为查找到循环字符的下标，
// 保证将这个值压入到temp数组中
let getStr = function (s) {
  let arr = [],
    res = 0;
  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) === -1) {
      arr.push(s[i]);
    } else {
      arr.shift(s[i]);
      i--;
      continue
    }
    console.log(arr);
    res = Math.max(res, arr.length);
  }
  console.log(res);
};


// [ 'a' ]
// [ 'a', 'b' ]
// [ 'a', 'b', 'c' ]
// [ 'b', 'c', 'a' ]
// [ 'c', 'a', 'b' ]
// [ 'a', 'b', 'c' ]
// [ 'c', 'b' ]
// [ 'b' ]
// 3
getStr(str);
