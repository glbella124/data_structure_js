// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// concat
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3);

// splice(start,deleteCount,item1,item2)
// start -- 指定修改的开始位置（从 0 计数）
// deleteCount -- 整数，表示要移除的数组元素的个数
// item -- 要添加进数组的元素，从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
const months = ['Jan','Feb','March','April']
months.splice(1,2,'Oct','May')
console.log(months);

// slice（start,end）
// start -- 提取起始处的索引;end -- 提取终止处的索引
// 返回一个新的数组对象，这一对象由begin和end决定的原数组的浅拷贝
// 原始数组不会被改变
const week = ['Monday','Tudesday','Wednesday','Thursday','Friday']
console.log(week.slice(1,4))