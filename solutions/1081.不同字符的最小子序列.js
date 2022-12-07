/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 *
 * https://leetcode.cn/problems/smallest-subsequence-of-distinct-characters/description/
 *
 * algorithms
 * Medium (58.20%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    23.8K
 * Total Submissions: 40.8K
 * Testcase Example:  '"bcabc"'
 *
 * 返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。
 *
 * 注意：该题与 316 https://leetcode.com/problems/remove-duplicate-letters/ 相同
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "bcabc"
 * 输出："abc"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbacdcbc"
 * 输出："acdb"
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const stack = [];

  // 记录字符出现的次数
  const count = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in count) {
      count[s[i]]++;
    } else {
      count[s[i]] = 1;
    }
  }

  // 记录字符在不在堆栈中
  const inStack = {};

  for (const c of s) {
    count[c]--;

    if (inStack[c]) continue;

    // 如果栈顶字符在当前字符后面，且后面还有重复的字符，则移除
    while (stack.length && stack[stack.length - 1] > c) {
      // 后面没有重复字符，保留
      if (count[stack[stack.length - 1]] == 0) break;

      inStack[stack.pop()] = false;
    }

    stack.push(c);
    inStack[c] = true;
  }

  return stack.join('');
};
// @lc code=end
