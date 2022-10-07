// 案例1: 删除指定数组元素 -- 去0，形成不包含0的数组
// let arr = [0,1,0,55,88,38,17,45,0,90]
// let newArr = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=0){
//         newArr[newArr.length]=arr[i]
//     }
// }
// console.log(newArr);


/* 案例2: 翻转数组 */
// 方案1
let arr1 = [1,2,3,4,5]
let arr2 = []
for(let i=0;i<arr1.length;i++){
    arr2[arr2.length] = arr1[arr1.length-i-1]
}
// console.log(arr2);

// 方案2
let arr3 = []
for(let i=arr1.length-1;i>=0;i--){
    arr3[arr3.length]=arr1[i]
}
console.log(arr3);