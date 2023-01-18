/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (55.00%)
 * Likes:    4795
 * Dislikes: 0
 * Total Accepted:    997.3K
 * Total Submissions: 1.8M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 子数组 是数组中的一个连续部分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 这居然是简单题！
  // let prev = 0,
  //   max = nums[0];

  // for (const n of nums) {
  //   prev = Math.max(prev + n, n);

  //   max = Math.max(prev, max);
  // }

  // return max;

  // 下面为分治法

  /**
   *
   * 对于区间 [i, j]
   *
   * lSum: 以 i 为左边界的最大子数组和
   * rSum: 以 j 为右边界的的最大子数组和
   * iSum: [i, j] 的子元素和
   * mSum: [i, j] 的最大子数组和
   *
   * m = (i + j) / 2
   *
   * 知道区间 [i, m] 和 [m + 1, j] 的 lSum 、rSum 、iSum 、mSum 如何求解 [i, j] 区间的呢？
   *
   * lSum = max(llSum, rlSum + liSum)
   * rSum = max(rrSum, lrSum + riSum)
   * iSum = liSum + riSum
   * mSum = max(lmSum, rmSum, rlSum + lrSum)
   */

  function pushUp(arr, l, r) {
    // base case
    if (l == r) return [arr[l], arr[l], arr[l], arr[l]];

    const mid = ~~(r + (l - r) / 2);

    const [llSum, lrSum, liSum, lmSum] = pushUp(arr, l, mid);
    const [rlSum, rrSum, riSum, rmSum] = pushUp(arr, mid + 1, r);

    return [
      Math.max(llSum, rlSum + liSum),
      Math.max(rrSum, lrSum + riSum),
      liSum + riSum,
      Math.max(lmSum, rmSum, rlSum + lrSum),
    ];
  }

  return pushUp(nums, 0, nums.length - 1)[3];
};
// @lc code=end
