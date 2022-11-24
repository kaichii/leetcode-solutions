/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 *
 * https://leetcode.cn/problems/repeated-dna-sequences/description/
 *
 * algorithms
 * Medium (52.98%)
 * Likes:    440
 * Dislikes: 0
 * Total Accepted:    122.3K
 * Total Submissions: 230.4K
 * Testcase Example:  '"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'
 *
 * DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。
 *
 *
 * 例如，"ACGAATTCCG" 是一个 DNA序列 。
 *
 *
 * 在研究 DNA 时，识别 DNA 中的重复序列非常有用。
 *
 * 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序
 * 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 输出：["AAAAACCCCC","CCCCCAAAAA"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "AAAAAAAAAAAAA"
 * 输出：["AAAAAAAAAA"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 10^5
 * s[i]=='A'、'C'、'G' or 'T'
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const arr = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'A':
        arr[i] = 0;
        break;
      case 'C':
        arr[i] = 1;
        break;
      case 'G':
        arr[i] = 2;
        break;
      case 'T':
        arr[i] = 3;
        break;
    }
  }

  let l = 0,
    r = 0,
    window = 0;

  const res = new Set(),
    seen = {};

  while (r < arr.length) {
    window = window * 4 + arr[r];
    r++;

    if (r - l == 10) {
      if (window in seen) {
        res.add(s.substring(l, r));
      } else {
        seen[window] = true;
      }

      window = window - arr[l] * Math.pow(4, 9);
      l++;
    }
  }

  return [...res];
};
// @lc code=end
