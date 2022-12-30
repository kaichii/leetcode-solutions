/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 *
 * [1584] 连接所有点的最小费用
 *
 * https://leetcode.cn/problems/min-cost-to-connect-all-points/description/
 *
 * algorithms
 * Medium (66.20%)
 * Likes:    256
 * Dislikes: 0
 * Total Accepted:    45.2K
 * Total Submissions: 68.3K
 * Testcase Example:  '[[0,0],[2,2],[3,10],[5,2],[7,0]]'
 *
 * 给你一个points 数组，表示 2D 平面上的一些点，其中 points[i] = [xi, yi] 。
 *
 * 连接点 [xi, yi] 和点 [xj, yj] 的费用为它们之间的 曼哈顿距离 ：|xi - xj| + |yi - yj| ，其中 |val| 表示
 * val 的绝对值。
 *
 * 请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有 一条简单路径时，才认为所有点都已连接。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
 * 输出：20
 * 解释：
 *
 * 我们可以按照上图所示连接所有点得到最小总费用，总费用为 20 。
 * 注意到任意两个点之间只有唯一一条路径互相到达。
 *
 *
 * 示例 2：
 *
 *
 * 输入：points = [[3,12],[-2,5],[-4,1]]
 * 输出：18
 *
 *
 * 示例 3：
 *
 *
 * 输入：points = [[0,0],[1,1],[1,0],[-1,1]]
 * 输出：4
 *
 *
 * 示例 4：
 *
 *
 * 输入：points = [[-1000000,-1000000],[1000000,1000000]]
 * 输出：4000000
 *
 *
 * 示例 5：
 *
 *
 * 输入：points = [[0,0]]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= points.length <= 1000
 * -10^6 <= xi, yi <= 10^6
 * 所有点 (xi, yi) 两两不同。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  // store [point1, point2, distance(point1, point2)]
  const edges = [];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      edges.push([i, j, Math.abs(x1 - x2) + Math.abs(y1 - y2)]);
    }
  }

  edges.sort(([, , w1], [, , w2]) => w1 - w2);

  const uf = new UF(points.length + 1);
  let mst = 0;

  for (const [p1, p2, weight] of edges) {
    if (uf.connected(p1, p2)) {
      continue;
    }

    uf.union(p1, p2);
    mst += weight;
  }

  return uf.count() == 2 ? mst : 0;
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
