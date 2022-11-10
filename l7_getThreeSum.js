// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
// 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
// 请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组
let nums = [-1, 0, 1, 2, -1, -4];
let arr = [...new Set(nums)];
// 1. 升序排列
arr.sort((a,b)=>a-b)
console.log(arr);
