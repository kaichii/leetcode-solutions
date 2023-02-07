/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 *
 * https://leetcode.cn/problems/count-negative-numbers-in-a-sorted-matrix/description/
 *
 * algorithms
 * Easy (74.69%)
 * Likes:    130
 * Dislikes: 0
 * Total Accepted:    47.3K
 * Total Submissions: 63.4K
 * Testcase Example:  '[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]'
 *
 * 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 请你统计并返回 grid 中 负数 的数目。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 * 输出：8
 * 解释：矩阵中共有 8 个负数。
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[3,2],[1,0]]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 100
 * -100 <= grid[i][j] <= 100
 *
 *
 *
 *
 * 进阶：你可以设计一个时间复杂度为 O(n + m) 的解决方案吗？
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const m = grid.length,
    n = grid[0].length;

  let count = 0;

  for (let i = 0; i < m; i++) {
    let left = 0,
      right = n;

    while (left < right) {
      const mid = ~~(left + ((right - left) >> 1));

      if (grid[i][mid] >= 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    count += n - left;
  }

  return count;
};
// @lc code=end
