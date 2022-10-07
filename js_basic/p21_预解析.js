/**
 * 预解析，代码执行
 * 1. 预解析:js引擎会把js里面所有的var，还有function提升到当前作用域的最前面
 * 2. 代码执行：按照代码书写的顺序从上往下执行
 * 预解析分为 变量预解析(变量提升) 和 函数预解析(函数提升)
 * 变量提升：把所有的变量声明提升到当前的作用域的最前面，不提升赋值操作
 * 函数提升：把所有的函数声明提升到当前作用域的最前面 不调用函数
 */

// 预解析案例1
// var num = 10;
// fun();

// function fun() {
//   console.log(num);
//   var num = 30;
// }
// 相当于执行了以下操作
// 结果undefined
// var num
// function fun(){
//     var num
//     console.log(num);
//     num = 30
// }
// num = 10

// 预解析案例2
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
  var a = (b = c = 9);
  console.log(a);
  console.log(b);
  console.log(c);
}
// 执行过程如下
// function f1() {
//   var a;
//   a = b = c = 9;
//   // 相当于 var a = 9;b=9;c=9
//   //   b 和 c 直接赋值，没有var声明,相当于全局变量
//   console.log(a); // 9
//   console.log(b); // 9
//   console.log(c); // 9
// }
// f1();
// console.log(c); // 9
// console.log(b);  // 9
// console.log(a);  // a is not defined

// num is not defined
// console.log(num);

// undefined
// console.log(num);
// var num = 10
// 执行过程 -- 结果undefined
// 变量声明先提升，不赋值
// var num
// console.log(num);
// num = 10

// 声明函数 -- 命名函数
// 输出11
// 函数声明会先提升
// fn()
// function fn(){
//     console.log(11);
// }

// 函数表达式(匿名函数)声明函数
// fun is not a function
// fun()
// var fun = function(){
//     console.log(22);
// }
// 相当于执行了以下代码
// 变量声明先提升，不赋值
// 函数表达式 调用必须写在函数表达式的下面
// var fun
// fun()
// fun = function(){
//     console.log(22);
// }
