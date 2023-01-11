/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 *
 * https://leetcode.cn/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (66.91%)
 * Likes:    926
 * Dislikes: 0
 * Total Accepted:    159.6K
 * Total Submissions: 238K
 * Testcase Example:  '"bbbab"'
 *
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 *
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "bbbab"
 * 输出：4
 * 解释：一个可能的最长回文子序列为 "bbbb" 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出：2
 * 解释：一个可能的最长回文子序列为 "bb" 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;

  // dp[i][j] 表示范围[i,j] 的最长回文子序列的长度
  /**
   * 如果 s[i] 和 s[j] 相同，则 dp[i][j] = dp[i + 1][j - 1] + 2
   * 不同，则 dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
   */

  // const dp = Array.from({ length: n }, () => new Array(n).fill(0));

  // base case
  // for (let i = 0; i < n; i++) {
  //   dp[i][i] = 1;
  // }

  // for (let i = n - 2; i >= 0; i--) {
  //   for (let j = i + 1; j < n; j++) {
  //     if (s[i] == s[j]) {
  //       dp[i][j] = dp[i + 1][j - 1] + 2;
  //     } else {
  //       dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
  //     }
  //   }
  // }

  /**
   * 如果 dp 优化成一维
   *
   */

  // base case
  const dp = new Array(n).fill(1);

  for (let i = n - 2; i >= 0; i--) {
    let prev = 0;

    for (let j = i + 1; j < n; j++) {
      const temp = dp[j];
      if (s[i] == s[j]) {
        // dp[i][j] = dp[i + 1][j - 1] + 2;
        // dp[i + 1][j - 1] 就是上一个 i-loop 和 上一个 j-loop 的值
        dp[j] = prev + 2;
      } else {
        // dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        // dp[i + 1][j] 就是上一个 i-loop 和 这一个 j-loop 的值
        // dp[i][j - 1] 就是这一个 i-loop 和 上一个 j-loop 的值
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }

      prev = temp;
    }
  }

  return dp[n - 1];
};
// @lc code=end
