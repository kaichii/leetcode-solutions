/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.53%)
 * Likes:    7035
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 4M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let ans = (start = len = 0);

//   for (let i = 0; i < s.length; i++) {
//     const pI = s.indexOf(s[i], start);
//     // 有重复字符
//     if (pI >= 0 && pI < i) {
//       // start 移动到重复字符后 1 位
//       start = pI + 1;
//       len = i - pI;
//     } else {
//       // 没有重复字符
//       len++;
//     }
//     ans = Math.max(ans, len);
//   }

//   return ans;
// };

// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  const window = {};

  let left = 0,
    right = 0,
    ans = 0;

  while (right < s.length) {
    const c = s[right];
    right++;
    window[c] = window[c] ? window[c] + 1 : 1;

    while (window[c] > 1) {
      const d = s[left];
      left++;
      window[d]--;
    }
    ans = Math.max(ans, right - left);
  }

  return ans;
};

// @lc code=end
