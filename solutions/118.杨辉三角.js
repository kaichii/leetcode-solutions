/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode.cn/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (75.62%)
 * Likes:    909
 * Dislikes: 0
 * Total Accepted:    384.3K
 * Total Submissions: 508.1K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 *
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 *
 * 示例 2:
 *
 *
 * 输入: numRows = 1
 * 输出: [[1]]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = Array.from({ length: numRows }, () => new Array());

  for (let i = 0; i < ans.length; i++) {
    let j = 0;

    while (j < i + 1) {
      ans[i].push(
        i >= 1 ? (ans[i - 1]?.[j] || 0) + (ans[i - 1]?.[j - 1] || 0) : 1
      );
      j++;
    }
  }

  return ans;
};
// @lc code=end
