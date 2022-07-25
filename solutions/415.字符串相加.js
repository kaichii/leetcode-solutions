/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (54.59%)
 * Likes:    562
 * Dislikes: 0
 * Total Accepted:    201.8K
 * Total Submissions: 368.5K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 *
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 *
 *
 * 示例 2：
 *
 *
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 *
 *
 * 示例 3：
 *
 *
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let ans = [],
    i = 0,
    len = Math.max(num1.length, num2.length),
    remaining = 0;

  while (len - 1 - i >= 0) {
    const sum =
      remaining +
      Number(num1[num1.length - i - 1] ?? 0) +
      Number(num2[num2.length - 1 - i] ?? 0);

    if (sum > 9) {
      remaining = 1;
      ans.unshift(sum - 10);
    } else {
      remaining = 0;
      ans.unshift(sum);
    }

    i++;
  }

  if (remaining == 1) ans.unshift('1');

  return ans.join('');
};
// @lc code=end
