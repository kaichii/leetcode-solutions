/*
 * @lc app=leetcode.cn id=1814 lang=javascript
 *
 * [1814] 统计一个数组中好对子的数目
 *
 * https://leetcode.cn/problems/count-nice-pairs-in-an-array/description/
 *
 * algorithms
 * Medium (36.41%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 35.3K
 * Testcase Example:  '[42,11,1,97]'
 *
 * 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。比方说 rev(123) = 321 ，
 * rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：
 *
 *
 * 0 <= i < j < nums.length
 * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 *
 *
 * 请你返回好下标对的数目。由于结果可能会很大，请将结果对 10^9 + 7 取余 后返回。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [42,11,1,97]
 * 输出：2
 * 解释：两个坐标对为：
 * ⁠- (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。
 * ⁠- (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。
 *
 *
 * 示例 2：
 *
 * 输入：nums = [13,10,35,24,76]
 * 输出：4
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  /**
   * 将和两个数关联的关系转化为只和一个数关联
   * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
   * => nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
   *
   */

  function rev(d) {
    let ans = 0;

    for (let i = d.length - 1; i >= 0; i--) {
      ans += d[i] * Math.pow(10, i);
    }

    return ans;
  }

  let count = 0,
    map = {};

  for (let n of nums) {
    const d = n - rev(String(n));

    count += map[d] || 0;

    if (d in map) {
      map[d]++;
    } else {
      map[d] = 1;
    }
  }

  return count % (Math.pow(10, 9) + 7);
};
// @lc code=end
