/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (42.08%)
 * Likes:    2191
 * Dislikes: 0
 * Total Accepted:    805.2K
 * Total Submissions: 1.9M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let count = 0;

  let i = 0,
    j = 0;

  while (i >= 0 && j >= 0) {
    // 还没到最后一个字符串的第 j 个字符
    if (i !== strs.length - 1) {
      // 如果和后一个同位置字符相同，则后移 i
      if (strs[i][j] === strs[i + 1][j]) {
        i++;
      }
      // 否则匹配失败，跳出循环
      else {
        break;
      }
    }
    // 匹配到了最后一个字符串，确保 strs[i][j] 有值: example: [""]
    else if (strs[i][j]) {
      // 公共前缀 +1
      count++;
      // 重置 i
      i = 0;
      // 列数 +1
      j++;
    } else {
      break;
    }
  }

  return strs[0].substring(0, count);
};
// @lc code=end
