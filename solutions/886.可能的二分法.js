/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 *
 * https://leetcode.cn/problems/possible-bipartition/description/
 *
 * algorithms
 * Medium (49.64%)
 * Likes:    351
 * Dislikes: 0
 * Total Accepted:    44.1K
 * Total Submissions: 85.4K
 * Testcase Example:  '4\n[[1,2],[1,3],[2,4]]'
 *
 * 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
 *
 * 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和
 * bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
 * 输出：true
 * 解释：group1 [1,4], group2 [2,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 2000
 * 0 <= dislikes.length <= 10^4
 * dislikes[i].length == 2
 * 1 <= dislikes[i][j] <= n
 * ai < bi
 * dislikes 中每一组都 不同
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const graph = buildGraph(n, dislikes);

  return isBipartite(graph);
};

function buildGraph(n, dislikes) {
  const graph = Array.from({ length: n }, () => []);

  for (const [a, b] of dislikes) {
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  }

  return graph;
}

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let valid = true;

  const color = new Array(graph.length).fill(false),
    visited = [];

  function dfs(graph, s) {
    visited[s] = true;

    for (const v of graph[s]) {
      if (!visited[v]) {
        // 没访问过，染色
        color[v] = !color[s];
        dfs(graph, v);
      } else {
        // 访问过，判断颜色
        if (color[v] == color[s]) {
          valid = false;
          return;
        }
      }
    }
  }

  function bfs(graph, s) {
    const queue = [];

    visited[s] = true;

    queue.push(s);

    while (queue.length && valid) {
      const v = queue.shift();

      for (let w of graph[v]) {
        if (!visited[w]) {
          color[w] = !color[v];

          visited[w] = true;
          queue.push(w);
        } else {
          if (color[w] == color[v]) {
            valid = false;
            return;
          }
        }
      }
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      bfs(graph, i);
    }
  }

  return valid;
};
// @lc code=end
