/*
 * @lc app=leetcode.cn id=1631 lang=javascript
 *
 * [1631] 最小体力消耗路径
 *
 * https://leetcode.cn/problems/path-with-minimum-effort/description/
 *
 * algorithms
 * Medium (50.53%)
 * Likes:    332
 * Dislikes: 0
 * Total Accepted:    38.5K
 * Total Submissions: 75.7K
 * Testcase Example:  '[[1,2,2],[3,8,2],[5,3,5]]'
 *
 * 你准备参加一场远足活动。给你一个二维 rows x columns 的地图 heights ，其中 heights[row][col] 表示格子
 * (row, col) 的高度。一开始你在最左上角的格子 (0, 0) ，且你希望去最右下角的格子 (rows-1, columns-1) （注意下标从
 * 0 开始编号）。你每次可以往 上，下，左，右 四个方向之一移动，你想要找到耗费 体力 最小的一条路径。
 *
 * 一条路径耗费的 体力值 是路径上相邻格子之间 高度差绝对值 的 最大值 决定的。
 *
 * 请你返回从左上角走到右下角的最小 体力消耗值 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：heights = [[1,2,2],[3,8,2],[5,3,5]]
 * 输出：2
 * 解释：路径 [1,3,5,3,5] 连续格子的差值绝对值最大为 2 。
 * 这条路径比路径 [1,2,2,2,5] 更优，因为另一条路径差值最大值为 3 。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：heights = [[1,2,3],[3,8,4],[5,3,5]]
 * 输出：1
 * 解释：路径 [1,2,3,4,5] 的相邻格子差值绝对值最大为 1 ，比路径 [1,3,5,3,5] 更优。
 *
 *
 * 示例 3：
 *
 *
 * 输入：heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
 * 输出：0
 * 解释：上图所示路径不需要消耗任何体力。
 *
 *
 *
 *
 * 提示：
 *
 *
 * rows == heights.length
 * columns == heights[i].length
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const m = heights.length,
    n = heights[0].length;

  const effortTo = Array.from({ length: m }, () => new Array(n).fill(Infinity));

  effortTo[0][0] = 0;

  const q = [[0, 0, 0]],
    d = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

  while (q.length) {
    const [ci, cj, ce] = q.shift();
    const ch = heights[ci][cj];

    if (ce > effortTo[ci][cj]) {
      continue;
    }

    for (const [dx, dy] of d) {
      const ni = ci + dx;
      const nj = cj + dy;

      if (ni < 0 || ni >= m || nj < 0 || nj >= n) {
        continue;
      }

      const nh = heights[ni][nj];

      const effortToNext = Math.max(effortTo[ci][cj], Math.abs(ch - nh));

      if (effortTo[ni][nj] > effortToNext) {
        effortTo[ni][nj] = effortToNext;

        q.push([ni, nj, effortToNext]);
      }
    }
  }

  const res = effortTo[m - 1][n - 1];

  return res == Infinity ? -1 : res;
};
// @lc code=end
