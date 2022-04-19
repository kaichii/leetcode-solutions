/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.94%)
 * Likes:    4658
 * Dislikes: 0
 * Total Accepted:    924.2K
 * Total Submissions: 2.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const ans = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0 || nums[n - 1] < 0) {
      return ans;
    }

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const t = nums[i] + nums[j] + nums[k];

      if (t > 0) {
        k--;
      }

      if (t < 0) {
        j++;
      }

      if (t === 0) {
        ans.push([nums[i], nums[j], nums[k]]);

        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }

        k--;
        j++;
      }
    }
  }

  return ans;
};
// @lc code=end
