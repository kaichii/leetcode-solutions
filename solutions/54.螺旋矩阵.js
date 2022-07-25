/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (48.55%)
 * Likes:    1074
 * Dislikes: 0
 * Total Accepted:    254.5K
 * Total Submissions: 523K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * -100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;

  if (m === 1) return matrix[0];

  // 多少层
  let step = Math.ceil(Math.min(m, n) / 2);

  const ans = [];

  // 剥洋葱
  for (let s = 0; s < step; s++) {
    let i = s,
      j = s;

    // 往右
    while (j < n - s) {
      ans.push(matrix[i][j]);

      j++;
    }

    i++;
    // 往下
    if (i < m - s) {
      // 重置越界的 j
      j--;
      while (i < m - s) {
        ans.push(matrix[i][j]);

        i++;
      }

      j--;

      // 往左
      if (j >= s) {
        // 重置越界的 i
        i--;
        while (j >= s) {
          ans.push(matrix[i][j]);

          j--;
        }

        i--;

        // 往右
        if (i > s) {
          // 重置越界的 j
          j++;
          while (i > s) {
            ans.push(matrix[i][j]);

            i--;
          }
        }
      }
    }
  }

  return ans;
};
// @lc code=end
