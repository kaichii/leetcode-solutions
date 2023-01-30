/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode.cn/problems/sqrtx/description/
 *
 * algorithms
 * Easy (38.78%)
 * Likes:    1174
 * Dislikes: 0
 * Total Accepted:    644.9K
 * Total Submissions: 1.7M
 * Testcase Example:  '4'
 *
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 *
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 *
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 4
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0,
    right = x;

  // 在 [0, x] 区间内找到一个最大的 n, 满足 n * n 不大于 x。

  while (left <= right) {
    const mid = ~~(left + ((right - left) >> 1));

    if (mid * mid == x) {
      // 收缩左边界
      left = mid + 1;
    } else if (mid * mid < x) {
      // 搜索 [mid + 1, right]
      left = mid + 1;
    } else if (mid * mid > x) {
      // 搜索 [left, mid - 1]
      right = mid - 1;
    }
  }

  return right;
};
// @lc code=end
