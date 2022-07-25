/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (36.25%)
 * Likes:    4810
 * Dislikes: 0
 * Total Accepted:    909.2K
 * Total Submissions: 2.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;

  if (len < 2) return s;

  let maxLen = 1,
    begin = 0;

  const dp = [];

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i < len; i++) {
      // j - i + 1 = l
      let j = l + i - 1;

      if (j >= len) {
        break;
      }

      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 >= maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + maxLen);
};
// @lc code=end
