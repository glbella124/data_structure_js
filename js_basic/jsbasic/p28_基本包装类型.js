// 对象才有属性和方法；复杂数据类型才有属性和方法
// 基本包装类型：把简单数据类型包装成为了复杂数据类型,就可以使用属性方法

// 1. js会把简单数据类型包装成为复杂数据类型
let temp = new String('andy')
// 2. 把临时变量的值给str
let str = temp
// 3. 销毁这个临时变量
temp = null
console.log(str.length);

let a = 'website'
console.log(a.length);