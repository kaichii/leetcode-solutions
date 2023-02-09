/*
 * @lc app=leetcode.cn id=1210 lang=javascript
 *
 * [1210] Minimum Moves to Reach Target with Rotations
 *
 * https://leetcode.cn/problems/minimum-moves-to-reach-target-with-rotations/description/
 *
 * algorithms
 * Hard (64.35%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    14.5K
 * Total Submissions: 22.5K
 * Testcase Example:  '[[0,0,0,0,0,1],[1,1,0,0,1,0],[0,0,0,0,1,1],[0,0,1,0,1,0],[0,1,1,0,0,0],[0,1,1,0,0,0]]\r'
 *
 * In an n*n grid, there is a snake that spans 2 cells and starts moving from
 * the top left corner at (0, 0) and (0, 1). The grid has empty cells
 * represented by zeros and blocked cells represented by ones. The snake wants
 * to reach the lower right corner at (n-1, n-2) and (n-1, n-1).
 *
 * In one move the snake can:
 *
 *
 * Move one cell to the right if there are no blocked cells there. This move
 * keeps the horizontal/vertical position of the snake as it is.
 * Move down one cell if there are no blocked cells there. This move keeps the
 * horizontal/vertical position of the snake as it is.
 * Rotate clockwise if it's in a horizontal position and the two cells under it
 * are both empty. In that case the snake moves from (r, c) and (r, c+1) to (r,
 * c) and (r+1, c).
 *
 * Rotate counterclockwise if it's in a vertical position and the two cells to
 * its right are both empty. In that case the snake moves from (r, c) and (r+1,
 * c) to (r, c) and (r, c+1).
 *
 *
 *
 * Return the minimum number of moves to reach the target.
 *
 * If there is no way to reach the target, return -1.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: grid = [[0,0,0,0,0,1],
 * ⁠              [1,1,0,0,1,0],
 * [0,0,0,0,1,1],
 * [0,0,1,0,1,0],
 * [0,1,1,0,0,0],
 * [0,1,1,0,0,0]]
 * Output: 11
 * Explanation:
 * One possible solution is [right, right, rotate clockwise, right, down, down,
 * down, down, rotate counterclockwise, right, down].
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[0,0,1,1,1,1],
 * [0,0,0,0,1,1],
 * [1,1,0,0,0,1],
 * [1,1,1,0,0,1],
 * [1,1,1,0,0,1],
 * [1,1,1,0,0,0]]
 * Output: 9
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= n <= 100
 * 0 <= grid[i][j] <= 1
 * It is guaranteed that the snake starts at empty cells.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  /**
   * 🐍 的移动更像是俄罗斯方块下落
   *
   * [x, y]: 蛇尾坐标
   * 0: 水平姿势
   * 1: 竖直姿势
   *
   * 水平姿势的可能移动方式
   * 1. 右：确保 [x, y + 2] 不为障碍物
   * 2. 下：确保 [x + 1, y], [x + 1, y + 1] 不为障碍物
   * 3. 顺时针旋转：确保 [x + 1, y], [x + 1, y + 1] 不为障碍物
   *
   * 竖直姿势的可能移动方式
   * 1. 右：确保 [x, y + 1], [x + 1, y + 1] 不为障碍物
   * 2. 下：确保 [x + 2, y] 不为障碍物
   * 3. 逆时针旋转：确保 [x, y + 1], [x + 1, y + 1] 不为障碍物
   *
   * 蛇尾要从 [0, 0] 移动到 [n - 1, n - 1] 有两种方式
   *
   * 1. 从 [n - 1, n - 2] 水平状态右移
   * 2. 从 [n - 2, n - 1] 水平状态下移
   *
   *
   * 假设已经用步骤最少移动到 [x, y]，下一步最优往哪走
   *
   * 1. 水平状态到 [x, y]，取最小值即可
   *  - 右: dp[0][x][y + 1] = dp[0][x][y] + 1
   *  - 下: dp[0][x + 1][y] = dp[0][x][y] + 1
   *  - 顺时针旋转: dp[1][x][y] = dp[0][x][y] + 1
   *
   * 2. 竖直状态到 [x, y]，取最小值即可
   *  - 右: dp[1][x][y + 1] = dp[1][x][y] + 1
   *  - 下: dp[1][x + 1][y] = dp[1][x][y] + 1
   *  - 逆时针旋转: dp[0][x][y] = dp[1][x][y] + 1
   */

  const n = grid.length;

  const dp = Array.from({ length: 2 }, () =>
    Array.from({ length: n }, () => new Array(n).fill(0))
  );

  // base case
  dp[0][0][0] = 0;
  dp[1][0][0] = 0;

  const q = [
    [0, 0, 0],
    [1, 0, 0],
  ];

  while (q.length) {
    const [cStats, x, y] = q.shift();

    // 水平
    if (cStats == 0) {
      // 可以往右
      if (y + 2 < n && grid[x][y + 2] !== 1) {
        dp[cStats][x][y + 1] = dp[cStats][x][y] + 1;

        q.push([cStats, x, y + 1]);
      }

      // 往下或顺时针旋转
      if (grid[x + 1][y] !== 1 && grid[x + 1][y + 1] !== 1) {
        dp[cStats][x + 1][y] = dp[cStats][x][y] + 1;
        dp[1 - cStats][x][y] = dp[cStats][x][y] + 1;

        q.push([cStats, x + 1, y]);
        q.push([1 - cStats, x, y]);
      }
    }
    // 竖直
    else {
      // 可以往右或逆时针旋转
      if (grid[x][y + 1] !== 1 && grid[x + 1][y + 1] !== 1) {
        dp[cStats][x][y + 1] = dp[cStats][x][y] + 1;
        dp[1 - cStats][x][y] = dp[cStats][x][y] + 1;

        q.push([cStats, x, y + 1]);
        q.push([1 - cStats, x, y]);
      }

      // 往下
      if (x + 2 < n && grid[x + 2][y] !== 1) {
        dp[cStats][x + 1][y] = dp[cStats][x][y] + 1;

        q.push([cStats, x + 1, y]);
      }
    }
  }

  /**
   *
   * 蛇尾要从 [0, 0] 移动到 [n - 1, n - 1] 有两种方式
   *
   * 1. 从 [n - 1, n - 2] 水平状态右移
   * 2. 从 [n - 2, n - 1] 水平状态下移
   */
  console.log(dp, dp[0][n - 1][n - 2], dp[0][n - 2][n - 1]);

  return 11;
};
// @lc code=end
