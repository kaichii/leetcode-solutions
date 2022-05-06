/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (76.76%)
 * Likes:    701
 * Dislikes: 0
 * Total Accepted:    193.2K
 * Total Submissions: 252.8K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 54 题的姊妹题， 反过来
  const matrix = Array.from({ length: n }, () => new Array(n));

  let item = 1;

  for (let s = 0; s < Math.ceil(n / 2); s++) {
    let i = s,
      j = s;

    // 往右
    while (j < n - s) {
      matrix[i][j] = item;

      item++;

      j++;
    }

    i++;
    // 往下
    if (i < n - s) {
      // 重置越界的 j
      j--;
      while (i < n - s) {
        matrix[i][j] = item;

        item++;

        i++;
      }

      j--;

      // 往左
      if (j >= s) {
        // 重置越界的 i
        i--;
        while (j >= s) {
          matrix[i][j] = item;

          item++;

          j--;
        }

        i--;

        // 往右
        if (i > s) {
          // 重置越界的 j
          j++;
          while (i > s) {
            matrix[i][j] = item;

            item++;

            i--;
          }
        }
      }
    }
  }

  return matrix;
};
// @lc code=end
