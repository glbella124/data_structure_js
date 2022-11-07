// 1 -- 转字符串
// let num = 10
// let a = 100
// let str = num.toString()
// let str1 = String(a)

// // 隐式转换 -- 推荐
// let str2 = a + ''
// // console.log(typeof str);
// console.log(typeof str1);

// 2 -- 转换为数字型
let c = "78.25"
let d = parseFloat(c)
let e = parseInt(c)
let f = Number(c)
// 利用算数运算 - * / 隐式转换
// let g = c - 0
// let g = c - "8"
let g = c * 1
// console.log(d);
// console.log(e);//取整
// console.log(f);
console.log( typeof g);