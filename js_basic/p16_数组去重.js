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
// console.log(arr3);

// 核心算法
// 目标：把旧数组里不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重
// 核心算法：我们遍历旧数组，然后拿着旧数组元素去查询新数组，没有则添加，存在不添加
// indexOf -- -1不存在新元素
let arr4 = [4,9,4,6,7,3,4,22,4,7]

// 封装一个去重的数组
function unique(arr){
    let newArr = []
    for(let i = 0; i<arr.length;i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])  
        }
    }
    return newArr
}
console.log(unique(arr4));