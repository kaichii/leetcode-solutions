/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 *
 * https://leetcode.cn/problems/course-schedule/description/
 *
 * algorithms
 * Medium (53.92%)
 * Likes:    1478
 * Dislikes: 0
 * Total Accepted:    268.5K
 * Total Submissions: 498.9K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 *
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi]
 * ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 *
 *
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 *
 *
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 *
 * 示例 2：
 *
 *
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 * prerequisites[i].length == 2
 * 0 i, bi < numCourses
 * prerequisites[i] 中的所有课程对 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 能不能修完取决于是否存在两门各自需要先修完对方才能修的课程，也就是是否循环依赖

  const graph = Array.from({ length: numCourses }, () => []);

  // 1.根据课程构建图
  for (const [to, from] of prerequisites) {
    graph[from].push(to);
  }

  // 2.判断图是否成环
  const visited = [],
    onPath = [];
  let loop = false;

  const traverse = (graph, s) => {
    if (onPath[s]) {
      loop = true;
    }

    if (visited[s] || loop) return;

    visited[s] = true;

    onPath[s] = true;

    for (const v of graph[s]) {
      traverse(graph, v);
    }

    onPath[s] = false;
  };

  // 不是所有课程都连接在一起
  for (let i = 0; i < numCourses; i++) {
    traverse(graph, i);
  }

  return !loop;
};
// @lc code=end
