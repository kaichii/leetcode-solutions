/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode.cn/problems/edit-distance/description/
 *
 * algorithms
 * Hard (62.72%)
 * Likes:    2730
 * Dislikes: 0
 * Total Accepted:    329.8K
 * Total Submissions: 525.4K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2：
 *
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= word1.length, word2.length <= 500
 * word1 和 word2 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length;

  const memo = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-1));

  function dp(s1, p1, s2, p2) {
    if (p1 == -1) return p2 + 1;
    if (p2 == -1) return p1 + 1;

    if (memo[p1][p2] !== -1) {
      return memo[p1][p2];
    }

    if (s1[p1] == s2[p2]) {
      memo[p1][p2] = dp(s1, p1 - 1, s2, p2 - 1);
    } else {
      memo[p1][p2] = Math.min(
        dp(s1, p1, s2, p2 - 1) + 1,
        dp(s1, p1 - 1, s2, p2) + 1,
        dp(s1, p1 - 1, s2, p2 - 1) + 1
      );
    }

    return memo[p1][p2];
  }

  return dp(word1, m - 1, word2, n - 1);
};
// @lc code=end
