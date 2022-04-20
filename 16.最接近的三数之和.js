/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.75%)
 * Likes:    1120
 * Dislikes: 0
 * Total Accepted:    339.1K
 * Total Submissions: 742.1K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 *
 * 返回这三个数的和。
 *
 * 假定每组输入只存在恰好一个解。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);

  let ans = 100000;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        return sum;
      }

      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }

      if (sum >= target) {
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
        k--;
      }

      if (sum < target) {
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        j++;
      }
    }
  }

  return ans;
};
// @lc code=end
