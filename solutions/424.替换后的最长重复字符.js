/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 *
 * https://leetcode.cn/problems/longest-repeating-character-replacement/description/
 *
 * algorithms
 * Medium (54.38%)
 * Likes:    714
 * Dislikes: 0
 * Total Accepted:    79.3K
 * Total Submissions: 145.6K
 * Testcase Example:  '"ABAB"\n2'
 *
 * 给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。
 *
 * 在执行上述操作后，返回包含相同字母的最长子字符串的长度。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ABAB", k = 2
 * 输出：4
 * 解释：用两个'A'替换为两个'B',反之亦然。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "AABABBA", k = 1
 * 输出：4
 * 解释：
 * 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
 * 子串 "BBBB" 有最长重复字母, 答案为 4。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^5
 * s 仅由大写英文字母组成
 * 0 <= k <= s.length
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const window = {};

  let left = 0,
    right = 0,
    len = 0,
    total = 0,
    max = 0;

  while (right < s.length) {
    const c = s[right];
    right++;

    window[c] = window[c] ? window[c] + 1 : 1;

    total++;

    max = Math.max(max, window[c]);

    // 间隙大于 k, 缩减 window
    while (total - max > k) {
      const d = s[left];

      left++;

      total--;
      window[d]--;

      max = Math.max(...Object.values(window));
    }

    len = Math.max(len, right - left);
  }

  return len;
};
// @lc code=end
