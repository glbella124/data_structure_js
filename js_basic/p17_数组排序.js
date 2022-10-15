// 冒泡排序
// 一次比较两个元素，顺序错误就交换
let arr = [88, 67, 90, 32, 17, 6, 32, 92, 10];
let temp = 0;
// 一共需要的趟数
for (let i = 0; i < arr.length - 1; i++) {
  // 每一趟交换次数
  for (j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr);

// 1. 翻转数组
let arr333 = ["red", "pink", "blue"];
arr333.reverse();
// console.log(arr333);

// 2. 数组排序 sort
let arr444 = [3, 6, 9, 1];
arr444.sort();
// console.log(arr444);

let arr6 = [18, 4, 77, 12];
arr6.sort((a,b)=>{
    // 升序排列
    // return a - b
    // 降序排列
    return b - a
})
console.log(arr6,"arr6");

// 返回数组元素索引号方法 -- 返回数组元素的索引号
// 只返回第一个满足条件的索引号
// 找不到该元素，返回的元素就是-1
let arr7 = ['red','green','pink']
console.log(arr7.indexOf('pink'));

// 从后面开始查找
let arr8 = ['red','blue','green','blue']
console.log(arr8.lastIndexOf('blue'));