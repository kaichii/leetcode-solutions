/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 *
 * https://leetcode.cn/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Medium (47.98%)
 * Likes:    861
 * Dislikes: 0
 * Total Accepted:    107.1K
 * Total Submissions: 222.3K
 * Testcase Example:  '"bcabc"'
 *
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
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
 * 1 <= s.length <= 10^4
 * s 由小写英文字母组成
 *
 *
 *
 *
 * 注意：该题与 1081
 * https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
 * 相同
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
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
