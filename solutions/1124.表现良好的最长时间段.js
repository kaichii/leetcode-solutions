/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 *
 * https://leetcode.cn/problems/longest-well-performing-interval/description/
 *
 * algorithms
 * Medium (34.80%)
 * Likes:    275
 * Dislikes: 0
 * Total Accepted:    22.8K
 * Total Submissions: 64.2K
 * Testcase Example:  '[9,9,6,0,6,6,9]'
 *
 * 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
 *
 * 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。
 *
 * 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
 *
 * 请你返回「表现良好时间段」的最大长度。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：hours = [9,9,6,0,6,6,9]
 * 输出：3
 * 解释：最长的表现良好时间段是 [9,9,6]。
 *
 * 示例 2：
 *
 *
 * 输入：hours = [6,6,6]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= hours.length <= 10^4
 * 0 <= hours[i] <= 16
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const pre = new Array(hours.length + 1),
    stack = [0];

  pre[0] = 0;

  for (let i = 1; i < pre.length; i++) {
    pre[i] = pre[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
    if (pre[stack[stack.length - 1]] > pre[i]) stack.push(i);
  }

  let ans = 0;

  for (let i = hours.length; i >= 1; i--) {
    while (stack.length && pre[stack[stack.length - 1]] < pre[i]) {
      ans = Math.max(ans, i - stack.pop());
    }
  }

  return ans;
};
// @lc code=end
