/**
 * 1.两数之和
 * 一个整数数组，一个整数target
 * 在数组中找出和为目标值的那两个整数，并返回他们的下标
 */

let nums = [3, 2, 4];
let target = 6;

// 哈希表法，求差值，存在map里，然后看看有没有这个数，返回两数索引
// 时间复杂度 O(n)
let twoNums = (arr, target) => {
  const map = new Map();
  nums.forEach((item, index) => {
    if (map.has(item)) {
      console.log([map.get(item), index]);
    }
    map.set(target - item, index);
  });
};

twoNums(nums, target);

// twoSum(nums, target);
// 方法1：
// let twoSum = function(nums,target){
//     const map =  new Map()
//     nums.forEach((v,i)=>{
//         if(map.has(v)){
//             // 哈希表中有target-v和v，返回两数的index
//             console.log([map.get(v),i]);
//         }
//         map.set(target-v,i)
//     })
//     console.log(map);
// }
// twoSum(nums,target)
