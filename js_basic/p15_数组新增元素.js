// 1. 修改length长度以及索引号增加数组元素
// 修改多余的空间没有给值，声明变量未给值，默认值是undefined
// let arr= [1,2,3]
// arr.length = 5
// console.log(arr);

// 2. 新增数组元素，修改索引号，追加数组元素
// 不要直接给数组名赋值，否则里面的数组元素都没了
// let arr1 = ['red','yellow','pink']
// arr1[3]='green'
// console.log(arr1);

// 案例1：遍历旧数组，找出大于等于30的元素
// 依次追加给新数组
// let oldArr = [19,49,27,67,10,8,86]
// let newArr = []
// let j=0
// for(let i=0;i<oldArr.length;i++){
//     if(oldArr[i]>30){
//         newArr[j]=oldArr[i]
//         j++
//     }
// }
// console.log(newArr);

// let oldArr = [19,49,27,67,10,8,86]
// let newArr = []
// for(let i=0;i<oldArr.length;i++){
//     if(oldArr[i]>30){
//         newArr[newArr.length]=oldArr[i]
//     }
// }
// console.log(newArr);

// push -- 数组结尾添加，返回原数组的长度
let myArr = [1,2,3]
console.log(myArr.push(5,'pink'));
console.log(myArr);

// unshift 数组开头
let myArr1 = [4,6,0,2]
console.log(myArr1.unshift(9,8,'abc'));
console.log(myArr1);

// 删除数组元素
// pop 删除数组最后一个元素，一次只能删除一个元素
// 返回删除的元素
console.log(myArr1.pop(),"pop");

// shift 删除数组第一个元素，一次只能删除一个元素
console.log(myArr1.shift());