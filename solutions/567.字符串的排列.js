/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode.cn/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (44.19%)
 * Likes:    784
 * Dislikes: 0
 * Total Accepted:    228.9K
 * Total Submissions: 517K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 *
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 *
 *
 * 示例 2：
 *
 *
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const window = {},
    need = {};

  for (let i = 0; i < s1.length; i++) {
    window[s1[i]] = 0;

    need[s1[i]] = need[s1[i]] ? need[s1[i]] + 1 : 1;
  }

  let left = 0,
    right = 0,
    valid = 0;

  while (right < s2.length) {
    const c = s2[right];

    right++;

    if (need[c]) {
      window[c]++;
      if (window[c] == need[c]) {
        valid++;
      }
    }

    if (right - left >= s1.length) {
      if (valid == Object.keys(need).length) {
        return true;
      }
      const c = s2[left];
      left++;

      if (need[c]) {
        if (window[c] == need[c]) {
          valid--;
        }

        window[c]--;
      }
    }
  }

  return false;
};
// @lc code=end
