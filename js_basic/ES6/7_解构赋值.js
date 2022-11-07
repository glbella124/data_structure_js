// js表达式。通过解构赋值，可以将属性值从对象数组中取出，赋值给其他变量
const arr = [1,2,3,45]
const [,,num3,num4='aa'] = arr
console.log(`第一名${num3},第二名${num4}`);

// 以属性的形式来指定元素的序号
const {2:n3,3:n4} = arr
console.log(n3,n4);

// 数组根据位置赋值
// 对象根据属性名

const obj = {
    name:'Linda',
    age:20,
    sex:'female'
}
// const {name:newName,age:newAge} = obj
// console.log(newName,newAge);
// 重构对象
const {name,...restObj} = obj
console.log(restObj);
