/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (60.99%)
 * Likes:    930
 * Dislikes: 0
 * Total Accepted:    279.4K
 * Total Submissions: 459.5K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 *
 * 注意：解集不能包含重复的组合。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 *
 * 示例 2:
 *
 *
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // 39 题的姊妹问题，只需要改一下回溯算法的决策(?)，重复候选项了解一下 candidates: [10, 1, 2, 7, 6, 1, 5] :vomiting_face:

  const ans = [];

  candidates = candidates.sort((a, b) => a - b);

  function bt(target, path, start) {
    if (target === 0) {
      return ans.push([...path]);
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      if (target >= candidates[i]) {
        path.push(candidates[i]);

        bt(target - candidates[i], path, i + 1);

        path.pop();
      } else {
        break;
      }
    }
  }

  bt(target, [], 0);

  return ans;
};
// @lc code=end
