/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode.cn/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (54.33%)
 * Likes:    262
 * Dislikes: 0
 * Total Accepted:    137.4K
 * Total Submissions: 252.8K
 * Testcase Example:  '"hello"'
 *
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 *
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "hello"
 * 输出："holle"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "leetcode"
 * 输出："leotcede"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s 由 可打印的 ASCII 字符组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (!s.length) return s;

  s = s.split('');
  let left = 0,
    right = s.length - 1;

  const check = (e) => {
    return (
      e == 'a' ||
      e == 'e' ||
      e == 'i' ||
      e == 'o' ||
      e == 'u' ||
      e == 'A' ||
      e == 'E' ||
      e == 'I' ||
      e == 'O' ||
      e == 'U'
    );
  };

  while (left < right) {
    if (!check(s[left]) && !check(s[right])) {
      left++;
      right--;
    } else if (!check(s[left])) {
      left++;
    } else if (!check(s[right])) {
      right--;
    } else {
      const temp = s[right];
      s[right] = s[left];
      s[left] = temp;

      left++;
      right--;
    }
  }

  return s.join('');
};
// @lc code=end
