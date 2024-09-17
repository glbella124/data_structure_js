/**
 * 给你一个整数数组 nums
 * 判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组
 *
 * 算法实现：数组去重+排序+双指针
 * 性能上优于简单的三重循环方法
 */
function threeSum(array) {
  const results = [];
  const nums = Array.from(new Set(array));
  nums.sort((a, b) => a - b);
  console.log(nums, "nums");

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
}
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

// O(n^2): 排序的时间复杂度是 O(n log n)，而双指针查找的时间复杂度是 O(n^2)。
// O(1): 空间复杂度，使用常数级别的额外空间（除了存储结果的数组）。