/*
 * @lc app=leetcode.cn id=1139 lang=javascript
 *
 * [1139] 最大的以 1 为边界的正方形
 *
 * https://leetcode.cn/problems/largest-1-bordered-square/description/
 *
 * algorithms
 * Medium (49.50%)
 * Likes:    122
 * Dislikes: 0
 * Total Accepted:    15K
 * Total Submissions: 29.2K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * 给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回
 * 0。
 *
 *
 *
 * 示例 1：
 *
 * 输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：9
 *
 *
 * 示例 2：
 *
 * 输入：grid = [[1,1,0,0]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= grid.length <= 100
 * 1 <= grid[0].length <= 100
 * grid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const left = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const up = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  let maxBorder = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (grid[i - 1][j - 1] === 1) {
        left[i][j] = left[i][j - 1] + 1;
        up[i][j] = up[i - 1][j] + 1;
        let border = Math.min(left[i][j], up[i][j]);
        while (
          left[i - border + 1][j] < border ||
          up[i][j - border + 1] < border
        ) {
          border--;
        }
        maxBorder = Math.max(maxBorder, border);
      }
    }
  }
  return maxBorder * maxBorder;
};
// @lc code=end
