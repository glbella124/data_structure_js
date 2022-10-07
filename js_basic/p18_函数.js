// 案例1：利用函数计算1-100之间的累加和
/**
 * 传入数据范围
 * @param {*} a
 * @param {*} b
 */
function getSum(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  console.log(sum);
}

// getSum(1, 100);

// 案例2：利用函数求任意两个数的最大值
function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
// console.log(getMax(5,9));

// 案例3： 利用函数求任意一个数组中的最大值
function getArrMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// let arr = [33,88,60,200,59,89]
// console.log(getArrMax(arr));

// 案例4： return只返回最后一个值
// function fn(a,b){
//   return a,b
// }

// console.log(fn(3,4));

//案例5: arguments的使用
// 只有函数有内置的arguments对象
function getArguments() {
  // arguments -- 里面存储了所有传递过来的实参
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[1]);
}
// getArguments(1, 2, 4);

// 案例6: 利用函数求任意个数的最大值
function getFuncMax() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max
}

// console.log(getFuncMax(1, 4, 5, 67, 2, 99, 100, 20));

// 案例7: 利用函数翻转数组
function reverseArr(arr){
  let newArr = []
  for(let i=arr.length-1;i>=0;i--){
    newArr[newArr.length] = arr[i]
  }
  return newArr
}

// let arr1 =[3,4,5,6,7,8,9]
// let bArr = reverseArr(arr1)
// console.log(bArr);

// 案例8: 函数封装冒泡排序
function bubbleSort(arr){
  let temp=0
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        temp = arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}

let testArr = [9,88,44,1,33,100,22]
console.log(bubbleSort(testArr));

// 案例9: 函数判断闰年
function isLeapYear(year){
  let flag = false
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    flag = true
  }
  return flag
}

console.log(isLeapYear(2008));
