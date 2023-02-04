/*
 * @lc app=leetcode.cn id=1129 lang=javascript
 *
 * [1129] 颜色交替的最短路径
 *
 * https://leetcode.cn/problems/shortest-path-with-alternating-colors/description/
 *
 * algorithms
 * Medium (40.27%)
 * Likes:    150
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 29K
 * Testcase Example:  '3\n[[0,1],[1,2]]\n[]'
 *
 * 在一个有向图中，节点分别标记为 0, 1, ..., n-1。图中每条边为红色或者蓝色，且存在自环或平行边。
 *
 * red_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的红色有向边。类似地，blue_edges 中的每一个 [i, j]
 * 对表示从节点 i 到节点 j 的蓝色有向边。
 *
 * 返回长度为 n 的数组 answer，其中 answer[X] 是从节点 0 到节点 X
 * 的红色边和蓝色边交替出现的最短路径的长度。如果不存在这样的路径，那么 answer[x] = -1。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
 * 输出：[0,1,-1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
 * 输出：[0,1,-1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
 * 输出：[0,-1,-1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
 * 输出：[0,1,2]
 *
 *
 * 示例 5：
 *
 *
 * 输入：n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
 * 输出：[0,1,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 100
 * red_edges.length <= 400
 * blue_edges.length <= 400
 * red_edges[i].length == blue_edges[i].length == 2
 * 0 <= red_edges[i][j], blue_edges[i][j] < n
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const graph = new Array(2)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array()));

  for (const [from, to] of redEdges) {
    // 0 代表红边
    graph[0][from].push(to);
  }

  for (const [from, to] of blueEdges) {
    // 1 代表蓝边
    graph[1][from].push(to);
  }

  // dp[type][point] 表示从 0 连接到终点 point 最后一条边为 type 的最短路径长度
  const dp = Array.from({ length: 2 }, () => new Array(n).fill(Infinity));

  // base case
  dp[0][0] = 0;
  dp[1][0] = 0;

  const q = [
    [0, 0],
    [0, 1],
  ];

  while (q.length) {
    const [cp, ct] = q.shift();

    const nt = 1 - ct;

    for (const np of graph[nt][cp]) {
      if (dp[nt][np] !== Infinity) continue;

      dp[nt][np] = dp[ct][cp] + 1;

      q.push([np, nt]);
    }
  }

  const ans = new Array(n);

  for (let i = 0; i < n; i++) {
    ans[i] = Math.min(dp[0][i], dp[1][i]);

    if (ans[i] == Infinity) ans[i] = -1;
  }

  return ans;
};
// @lc code=end
