/**
 * js在ES6之前没有块级作用域
 */
// if (3 < 7) {
//   var num = 10;
// }
// console.log(num);

/**
 * 作用域链：内部函数访问外部函数的变量，采取的是链式查找
 */
var num = 10
function getA() {
  var num = 20;
  function fun() {
    console.log(num);
  }
  fun()
}
getA()

