/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 *
 * https://leetcode.cn/problems/network-delay-time/description/
 *
 * algorithms
 * Medium (54.85%)
 * Likes:    625
 * Dislikes: 0
 * Total Accepted:    97.4K
 * Total Submissions: 176.5K
 * Testcase Example:  '[[2,1,1],[2,3,1],[3,4,1]]\n4\n2'
 *
 * 有 n 个网络节点，标记为 1 到 n。
 *
 * 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点，
 * wi 是一个信号从源节点传递到目标节点的时间。
 *
 * 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：times = [[1,2,1]], n = 2, k = 1
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：times = [[1,2,1]], n = 2, k = 2
 * 输出：-1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= n <= 100
 * 1 <= times.length <= 6000
 * times[i].length == 3
 * 1 <= ui, vi <= n
 * ui != vi
 * 0 <= wi <= 100
 * 所有 (ui, vi) 对都 互不相同（即，不含重复边）
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [form, to, weight] of times) {
    graph[form].push([to, weight]);
  }

  const distTo = new Array(n + 1).fill(Infinity);

  distTo[0] = -Infinity;
  // 出发点到自己的距离
  distTo[k] = 0;

  const q = [];

  // 出发点到自己的距离
  q.push([k, 0]);

  while (q.length) {
    const [cp, cw] = q.shift();

    if (cw > distTo[cp]) {
      continue;
    }

    for (const [np, nw] of graph[cp]) {
      const distance = distTo[cp] + nw;
      if (distTo[np] > distance) {
        distTo[np] = distance;

        q.push([np, distance]);
      }
    }
  }

  const res = Math.max(...distTo);

  return res == Infinity ? -1 : res;
};
// @lc code=end
