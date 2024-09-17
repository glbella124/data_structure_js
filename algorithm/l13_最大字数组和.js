/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组
 * （子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分
 *
 */
function maxSubArray(nums) {
  if (nums.length === 0) return 0;
  //   跟踪当前子数组的最大和
  let maxCurrent = nums[0];
  //   跟踪全局最大和
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}

// 时间复杂度 O(n)
// 只遍历了一次数组，时间复杂度是线性的
// 空间复杂度 O(1)
// 仅使用了常数个额外的变量，空间复杂度是线性的
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("示例 1 输出:", maxSubArray(nums1));
