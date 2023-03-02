/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (53.37%)
 * Likes:    969
 * Dislikes: 0
 * Total Accepted:    306.2K
 * Total Submissions: 574.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入:a = "11", b = "1"
 * 输出："100"
 *
 * 示例 2：
 *
 *
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = '',
    r = 0;

  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');

  let i = 0;

  while (i < Math.max(a.length, b.length) || r > 0) {
    const val = a.charAt(i) - '0' + (b.charAt(i) - '0') + r;
    res += val % 2;
    r = ~~(val / 2);
    i++;
  }

  return res.split('').reverse().join('');
};
// @lc code=end
