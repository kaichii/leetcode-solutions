/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (44.84%)
 * Likes:    2224
 * Dislikes: 0
 * Total Accepted:    361.5K
 * Total Submissions: 804.5K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 *
 *
 *
 * 注意：
 *
 *
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 和 t 由英文字母组成
 *
 *
 *
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s == t) return t;

  let left = 0,
    right = 0,
    valid = 0,
    start = 0,
    len = Number.MAX_SAFE_INTEGER;

  const need = {},
    window = {};

  for (let i = 0; i < t.length; i++) {
    const e = t[i];
    window[e] = 0;

    need[e] = need[e] ? need[e] + 1 : 1;
  }

  while (right < s.length) {
    const c = s[right];

    right++;

    if (need[c]) {
      window[c]++;
      if (window[c] == need[c]) {
        valid++;
      }
    }

    // 当 window 满足 need，left++, window 缩小
    while (valid == Object.keys(need).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      const c = s[left];

      left++;

      if (need[c]) {
        if (window[c] == need[c]) {
          valid--;
        }
        window[c]--;
      }
    }
  }

  return len == Number.MAX_SAFE_INTEGER ? '' : s.substring(start, start + len);
};
// @lc code=end
