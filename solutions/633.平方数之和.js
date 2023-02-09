/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode.cn/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Medium (38.68%)
 * Likes:    414
 * Dislikes: 0
 * Total Accepted:    126.3K
 * Total Submissions: 328K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：c = 5
 * 输出：true
 * 解释：1 * 1 + 2 * 2 = 5
 *
 *
 * 示例 2：
 *
 *
 * 输入：c = 3
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= c <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let i = 0; i <= ~~Math.sqrt(c); i++) {
    let left = 0,
      right = ~~Math.sqrt(c);

    const target = c - i * i;

    while (left <= right) {
      const mid = ~~(left + ((right - left) >> 1));

      if (mid * mid == target) {
        return true;
      } else if (mid * mid > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
};
// @lc code=end
