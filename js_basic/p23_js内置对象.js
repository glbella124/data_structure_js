// console.log(Math.max(3, 9, 10, 88, 66));
// // 有非数字返回NaN
// console.log(Math.max(1, 28, "pink"));
// // -Infinity
// console.log(Math.max());
// console.log(Math.PI);
// 隐式转换
// console.log(Math.abs("-1"));
// console.log(Math.abs(-1));

// // 向下取整 -- 往最小取
// console.log(Math.floor(9.78));
// // 向上取整 -- 往最大取
// console.log(Math.ceil(7.56));
// // 四舍五入就近取整，.5特殊，它往大了取
// console.log(Math.round(3.29));
// // 随机数 0 <= x < 1
// console.log(Math.random());

// 得到一个两数之间的随机整数，包括两个数在内
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(10, 100));

// 随机点名
let arr= ['Alice','Linda','Mike','Paul','Jane']

let num = getRandom(0,arr.length-1)
console.log(arr[num]);
