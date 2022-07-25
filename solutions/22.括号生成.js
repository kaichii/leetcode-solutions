/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.37%)
 * Likes:    2582
 * Dislikes: 0
 * Total Accepted:    487.4K
 * Total Submissions: 629.5K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 符合条件的组合必须满足以下两个条件：
  // 1. 首尾必须是 "(" 和 ")"。
  // 2. 每一个 ")" 前面都有 "(" 与之对应。

  if (!n) return [];

  const ans = [];

  function bt(s, l, r) {
    if (s.length === 2 * n) {
      return ans.push(s);
    }

    if (l < n) {
      s += '(';
      bt(s, l + 1, r);
      s = s.slice(0, s.length - 1);
    }

    if (r < l) {
      s += ')';
      bt(s, l, r + 1);
      s = s.slice(0, s.length - 1);
    }
  }

  bt('', 0, 0);

  return ans;
};
// @lc code=end
