// 判断是否是回文数
let a = 1221;
function isPalindrome(num) {
  let original = num;
  if ((num % 10 == 0 && num != 0) || num < 0) {
    console.log(false);
  }

  let reverseNum = 0;

  while (num) {
    reverseNum = (num % 10) + reverseNum * 10;
    // 向下取整z
    num = Math.floor(num / 10);
  }

  console.log(original === reverseNum);
}

isPalindrome(a);
