/*
 * @lc app=leetcode.cn id=1017 lang=javascript
 *
 * [1017] 负二进制转换
 *
 * https://leetcode.cn/problems/convert-to-base-2/description/
 *
 * algorithms
 * Medium (57.20%)
 * Likes:    86
 * Dislikes: 0
 * Total Accepted:    8.2K
 * Total Submissions: 13.3K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，以二进制字符串的形式返回该整数的 负二进制（base -2）表示。
 *
 * 注意，除非字符串就是 "0"，否则返回的字符串中不能含有前导零。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出："110"
 * 解释：(-2)^2 + (-2)^1 = 2
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 3
 * 输出："111"
 * 解释：(-2)^2 + (-2)^1 + (-2)^0 = 3
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 4
 * 输出："100"
 * 解释：(-2)^2 = 4
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  if (!n) return '0';

  let ans = '';

  while (n) {
    let remain = n % -2;
    ans = String(Math.abs(remain)) + ans;
    n = remain < 0 ? ~~(n / -2 + 1) : ~~(n / -2);
  }

  return ans;
};
// @lc code=end
