/*
 * @lc app=leetcode.cn id=1092 lang=javascript
 *
 * [1092] 最短公共超序列
 *
 * https://leetcode.cn/problems/shortest-common-supersequence/description/
 *
 * algorithms
 * Hard (54.24%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    11.8K
 * Total Submissions: 20.3K
 * Testcase Example:  '"abac"\n"cab"'
 *
 * 给出两个字符串 str1 和 str2，返回同时以 str1 和 str2
 * 作为子序列的最短字符串。如果答案不止一个，则可以返回满足条件的任意一个答案。
 *
 * （如果从字符串 T 中删除一些字符（也可能不删除，并且选出的这些字符可以位于 T 中的 任意位置），可以得到字符串 S，那么 S 就是 T
 * 的子序列）
 *
 *
 *
 * 示例：
 *
 * 输入：str1 = "abac", str2 = "cab"
 * 输出："cabac"
 * 解释：
 * str1 = "abac" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 的第一个 "c"得到 "abac"。
 * str2 = "cab" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 末尾的 "ac" 得到 "cab"。
 * 最终我们给出的答案是满足上述属性的最短字符串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= str1.length, str2.length <= 1000
 * str1 和 str2 都由小写英文字母组成。
 *
 *
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  if (str1 === '') return str2;
  if (str2 === '') return str1;

  const m = str1.length,
    n = str2.length;

  const memo = Array.from({ length: m }, () => new Array(n).fill(''));

  function dfs(i, j) {
    if (i < 0) return str2.slice(0, j + 1);
    if (j < 0) return str1.slice(0, i + 1);

    let p = memo[i][j];

    if (p !== '') return p;

    if (str1[i] === str2[j]) {
      p = dfs(i - 1, j - 1) + str1[i];
    } else {
      const ans1 = dfs(i - 1, j);
      const ans2 = dfs(i, j - 1);

      if (ans1.length > ans2.length) {
        p = ans2 + str2[j];
      } else {
        p = ans1 + str1[i];
      }
    }

    memo[i][j] = p;
    return p;
  }

  return dfs(m - 1, n - 1);
};
// @lc code=end
