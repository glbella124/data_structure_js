// 基本数据类型 -- 开辟了两个新的内存空间
// 互不影响 -- 类似深拷贝
let a = 5;
let b = a;
b = 3;
console.log(a, b);

// 数组和对象的赋值 -- 浅拷贝
// newArr影响了原来的arr
let arr = [1, 2, 3];
let newArr = arr;
newArr.push(4);
console.log(arr, newArr);

// 解构赋值
// 针对一维数组的时候可以看组是深拷贝
let arr1 = [4, 5, 6];
let newArr1 = [...arr1];
newArr1.push(9);
// console.log(arr1,newArr1);

// 多维数组是浅拷贝
let arr2 = [
  [1, 2, 3],
  [5, 6, 7],
];
let newArr2 = [...arr2];
newArr2[0].push(66);
console.log(arr2, newArr2);

// 工作中应用 -- 深拷贝
let newObj = [
  { id: 1, stu: "a" },
  { id: 2, sty: "b" },
];
// 先将数组转换为字符串，再转换为js对象
let newList = JSON.parse(JSON.stringify(newObj));
newList.push({ id: 3 });
console.log(newList);
// 方法不能拷贝

// 标准深拷贝 -- 专门针对引用数据类型
// 数组的constructor

// object的constructor
function deepClone(source) {
  // [] 指向Array基类
  // 外层定义
  const targetObj = source.constructor === Array ? [] : {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      // keys -- 基础数据类型，对象或数组
      // 引用数据类型

      if (source[key] && typeof source[key] === "object") {
        // 内层定义
        targetObj[key] = source.constructor === Array ? [] : {};
        // 递归
        targetObj[key] = deepClone(source[key])
      } else {
        // 基本数据类型，直接赋值
        targetObj[key] = source[key];
      }
    }
  }

  return targetObj
}

let objC = {
    ff:'name',
    age:1,
    obj:{str:'111',age:12},
    arr:[4,5,6,7]
}

let newObj33 = deepClone(objC)
newObj33.age = 10
newObj33.arr.push(111)
console.log(objC,newObj33);