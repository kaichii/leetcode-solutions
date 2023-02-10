/*
 * @lc app=leetcode.cn id=1210 lang=javascript
 *
 * [1210] 穿过迷宫的最少移动次数
 *
 * https://leetcode.cn/problems/minimum-moves-to-reach-target-with-rotations/description/
 *
 * algorithms
 * Hard (64.36%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    14.5K
 * Total Submissions: 22.6K
 * Testcase Example:  '[[0,0,0,0,0,1],[1,1,0,0,1,0],[0,0,0,0,1,1],[0,0,1,0,1,0],[0,1,1,0,0,0],[0,1,1,0,0,0]]\r'
 *
 * 你还记得那条风靡全球的贪吃蛇吗？
 *
 * 我们在一个 n*n 的网格上构建了新的迷宫地图，蛇的长度为 2，也就是说它会占去两个单元格。蛇会从左上角（(0, 0) 和 (0,
 * 1)）开始移动。我们用 0 表示空单元格，用 1 表示障碍物。蛇需要移动到迷宫的右下角（(n-1, n-2) 和 (n-1, n-1)）。
 *
 * 每次移动，蛇可以这样走：
 *
 *
 * 如果没有障碍，则向右移动一个单元格。并仍然保持身体的水平／竖直状态。
 * 如果没有障碍，则向下移动一个单元格。并仍然保持身体的水平／竖直状态。
 * 如果它处于水平状态并且其下面的两个单元都是空的，就顺时针旋转 90 度。蛇从（(r, c)、(r, c+1)）移动到 （(r, c)、(r+1,
 * c)）。
 *
 * 如果它处于竖直状态并且其右面的两个单元都是空的，就逆时针旋转 90 度。蛇从（(r, c)、(r+1, c)）移动到（(r, c)、(r,
 * c+1)）。
 *
 *
 *
 * 返回蛇抵达目的地所需的最少移动次数。
 *
 * 如果无法到达目的地，请返回 -1。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：grid = [[0,0,0,0,0,1],
 * ⁠              [1,1,0,0,1,0],
 * [0,0,0,0,1,1],
 * [0,0,1,0,1,0],
 * [0,1,1,0,0,0],
 * [0,1,1,0,0,0]]
 * 输出：11
 * 解释：
 * 一种可能的解决方案是 [右, 右, 顺时针旋转, 右, 下, 下, 下, 下, 逆时针旋转, 右, 下]。
 *
 *
 * 示例 2：
 *
 * 输入：grid = [[0,0,1,1,1,1],
 * [0,0,0,0,1,1],
 * [1,1,0,0,0,1],
 * [1,1,1,0,0,1],
 * [1,1,1,0,0,1],
 * [1,1,1,0,0,0]]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= n <= 100
 * 0 <= grid[i][j] <= 1
 * 蛇保证从空单元格开始出发。
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
   * 蛇尾要从 [0, 0] 移动到 [n - 1, n - 1] 需要从 [n - 1, n - 2] 水平状态右移
   *
   * 假设已经用步骤最少移动到 [x, y]，下一步最优往哪走
   *
   * 1. 水平状态到 [x, y]
   *  - 右: dp[0][x][y + 1] = dp[0][x][y] + 1
   *  - 下: dp[0][x + 1][y] = dp[0][x][y] + 1
   *  - 顺时针旋转: dp[1][x][y] = dp[0][x][y] + 1
   *
   * 2. 竖直状态到 [x, y]
   *  - 右: dp[1][x][y + 1] = dp[1][x][y] + 1
   *  - 下: dp[1][x + 1][y] = dp[1][x][y] + 1
   *  - 逆时针旋转: dp[0][x][y] = dp[1][x][y] + 1
   */

  const n = grid.length;

  function isBlock(i, j) {
    if (i >= n || j >= n) return true;
    return grid[i][j] !== 0;
  }

  const dp = Array.from({ length: 2 }, () =>
    Array.from({ length: n }, () => new Array(n).fill(-1))
  );

  // base case
  dp[0][0][0] = 0;

  const q = [[0, 0, 0]];

  while (q.length) {
    const [cStats, x, y] = q.shift();

    // 水平
    if (cStats == 0) {
      // 可以往右
      if (!isBlock(x, y + 2) && dp[cStats][x][y + 1] == -1) {
        dp[cStats][x][y + 1] = dp[cStats][x][y] + 1;

        q.push([cStats, x, y + 1]);
      }

      // 往下或顺时针旋转
      if (!isBlock(x + 1, y) && !isBlock(x + 1, y + 1)) {
        if (dp[cStats][x + 1][y] == -1) {
          dp[cStats][x + 1][y] = dp[cStats][x][y] + 1;
          q.push([cStats, x + 1, y]);
        }

        if (dp[1 - cStats][x][y] == -1) {
          dp[1 - cStats][x][y] = dp[cStats][x][y] + 1;
          q.push([1 - cStats, x, y]);
        }
      }
    }
    // 竖直
    else {
      // 可以往右或逆时针旋转
      if (!isBlock(x, y + 1) && !isBlock(x + 1, y + 1)) {
        if (dp[cStats][x][y + 1] == -1) {
          dp[cStats][x][y + 1] = dp[cStats][x][y] + 1;
          q.push([cStats, x, y + 1]);
        }

        if (dp[1 - cStats][x][y] == -1) {
          dp[1 - cStats][x][y] = dp[cStats][x][y] + 1;
          q.push([1 - cStats, x, y]);
        }
      }

      // 往下
      if (!isBlock(x + 2, y) && dp[cStats][x + 1][y] == -1) {
        dp[cStats][x + 1][y] = dp[cStats][x][y] + 1;

        q.push([cStats, x + 1, y]);
      }
    }
  }

  // 蛇尾要从 [0, 0] 移动到 [n - 1, n - 1] 需要从 [n - 1, n - 2] 水平状态右移
  return dp[0][n - 1][n - 2];
};
// @lc code=end
