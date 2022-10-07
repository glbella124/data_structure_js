// 案例： 求数组最大值
let arr = [2, 99, 65, 78, 56, 90, 788];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

// 案例: 数组转换为分隔字符串
// 要求 ['red','yellow','black']转换为字符串，并且用|或其他符号分割
let arr1 = ["red", "yellow", "black", "pink", "orange"];
let str = "";
let sep  = "!"
for (let i = 0; i < arr1.length; i++) {
  str += arr1[i] + sep;
}
console.log(str);
