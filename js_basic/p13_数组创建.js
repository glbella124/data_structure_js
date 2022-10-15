// 1.数组: 一组数据的集合, 存储在单个变量下的优雅方式
// 2.利用new关键字创建数组
// 2表示数组长度为2
let arr = new Array(2)
// 表示有2个数组元素 2,3
let arr3 = new Array(2,3)


// 3.利用数组字面量创建空数组 -- 常见
let arr1 = []
let arr2 = [1,2,3]
// 4.数组里面的数据一定用逗号分隔
// 5.数组里面的数据, 称为数组元素
// 6.数组可以存放任意类型的数据 -- 字符串，数字，布尔值等

// 检测是否为数组 
// 1.instanceof 运算符
let arr11 = []
// console.log(arr11 instanceof Array);
// 2. isArray(参数);H5新增的方法 ie9以上版本支持
console.log(Array.isArray(arr11));

