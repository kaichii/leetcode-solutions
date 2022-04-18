/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (31.61%)
 * Likes:    2901
 * Dislikes: 0
 * Total Accepted:    262.7K
 * Total Submissions: 831K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *
 *
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 *
 *
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aa", p = "a"
 * 输出：false
 * 解释："a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 *
 * 输入：s = "aa", p = "a*"
 * 输出：true
 * 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "ab", p = ".*"
 * 输出：true
 * 解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 20
 * 1 <= p.length <= 30
 * s 只包含从 a-z 的小写字母。
 * p 只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 保证每次出现字符 * 时，前面都匹配到有效的字符
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // dp[i][j] 表示 s[0,i] 和 p[0,j] 是否匹配
  // 根据 p[j] 的符号分情况讨论
  // 1. p[j] 为字母或 "." && matches(s[i], p[j]):
  //   dp[i][j] = dp[i-1][j-1]
  // 2. p[j] 为 "*":
  //   2.1: matches(s[i],p[j-1]):
  //      2.1.1: 匹配 0 次: dp[i][j] = dp[i][j-2]
  //      2.1.2: 匹配 1 次: dp[i][j] = dp[i-1][j-2]
  //      2.1.3: 匹配 >= 2次: dp[i][j] = dp[i-1][j]
  //   2.2: else: dp[i][j] = dp[i][j-2]

  const m = s.length,
    n = p.length;

  s = ' ' + s;
  p = ' ' + p;

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j] === '*') {
        dp[i][j] = dp[i][j - 2];

        if (matches(s[i], p[j - 1])) {
          dp[i][j] = dp[i - 1][j - 2] || dp[i - 1][j];
        }
      } else if (matches(s[i], p[j])) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

function matches(x, y) {
  if (y === '.') return true;

  return x === y;
}
// @lc code=end
