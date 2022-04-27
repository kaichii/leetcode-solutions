/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 *
 * https://leetcode-cn.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (33.14%)
 * Likes:    866
 * Dislikes: 0
 * Total Accepted:    103.6K
 * Total Submissions: 312.2K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 *
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 *
 *
 * 两个字符串完全匹配才算匹配成功。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "*"
 * 输出: true
 * 解释: '*' 可以匹配任意字符串。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "cb"
 * p = "?a"
 * 输出: false
 * 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "adceb"
 * p = "*a*b"
 * 输出: true
 * 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "acdcb"
 * p = "a*c?b"
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  /**
   * dp[i][j] 表示 s[0,i] 和 p[0,j] 是否匹配
   *
   * 1. p[j] = "a-z":
   *    s[i] == p[j]: dp[i][j] = dp[i-1][j-1]
   * 2. p[j] = "?":
   *    dp[i][j] = dp[i-1][j-1]
   * 3. p[j] = "*":
   *    匹配 0 次： dp[i][j] = dp[i][j-1]
   *    匹配 1 次：dp[i][j] = dp[i-1][j-1]
   *    匹配 > 1 次：dp[i][j] = dp[i-1][j]
   *
   */

  s = ' ' + s;
  // "******" 和 "*" 效果一样，去除 p 中多个相邻 "*"，不影响结果
  p = ' ' + p.replaceAll(/\*+/g, '*');

  const m = s.length,
    n = p.length;

  const dp = Array.from({ length: m }, () => new Array(n).fill(false));

  dp[0][0] = true;

  for (let i = 0; i < m; i++) {
    let j = 1;
    while (j < n) {
      if (p[j] === '*') {
        dp[i][j] = dp[i][j - 1] || !!dp[i - 1]?.[j] || !!dp[i - 1]?.[j - 1];
      } else if (p[j] === '?') {
        dp[i][j] = !!dp[i - 1]?.[j - 1];
      } else if (s[i] === p[j]) {
        dp[i][j] = !!dp[i - 1]?.[j - 1];
      }
      j++;
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end
