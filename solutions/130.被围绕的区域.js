/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode.cn/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (45.97%)
 * Likes:    901
 * Dislikes: 0
 * Total Accepted:    210.3K
 * Total Submissions: 455.8K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X'
 * 填充。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board =
 * [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [["X"]]
 * 输出：[["X"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n == board[i].length
 * 1
 * board[i][j] 为 'X' 或 'O'
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  /**
   * 将 board 边缘的 O 连接起来，然后将所有的 O 与上下左右的 O 连接起来，最后没有连接的 O 需要被修改为 X
   */

  if (!board.length) return;

  const m = board.length,
    n = board[0].length;

  const uf = new UF(m * n + 1);
  // 哑节点
  const dummy = m * n;

  // 连接首尾两列的 O
  for (let i = 0; i < m; i++) {
    if (board[i][0] == 'O') {
      uf.union(dummy, i * n);
    }

    if (board[i][n - 1] == 'O') {
      uf.union(dummy, i * n + n - 1);
    }
  }

  // 连接首尾两行的 O
  for (let i = 0; i < n; i++) {
    if (board[0][i] == 'O') {
      uf.union(dummy, i);
    }

    if (board[m - 1][i] == 'O') {
      uf.union(dummy, (m - 1) * n + i);
    }
  }

  const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 连接 O 上下左右的 O
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] == 'O')
        for (let k = 0; k < 4; k++) {
          const x = i + d[k][0];
          const y = j + d[k][1];

          if (board[x][y] == 'O') {
            uf.union(i * n + j, x * n + y);
          }
        }
    }
  }

  // 把没有和 dummy 连通的 O 改为 X

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!uf.connected(dummy, i * n + j)) {
        board[i][j] = 'X';
      }
    }
  }
};

function UF(n) {
  let count = n;
  const parent = new Array(n);

  // 初始化
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  // 找到 x 的根节点
  function find(x) {
    if (parent[x] != x) {
      parent[x] = find(parent[x]);
    }

    return parent[x];
  }

  // 连接 p,q
  this.union = (p, q) => {
    const rootP = find(p);
    const rootQ = find(q);

    if (rootP == rootQ) return;

    parent[rootP] = rootQ;
    count--;
  };

  // 判断 p,q 是否连通
  this.connected = (p, q) => {
    const rootP = find(p);
    const rootQ = find(q);

    return rootP == rootQ;
  };

  // 通量
  this.count = () => count;
}
// @lc code=end
