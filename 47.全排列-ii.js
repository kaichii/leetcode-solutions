/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (64.44%)
 * Likes:    1035
 * Dislikes: 0
 * Total Accepted:    304.9K
 * Total Submissions: 472.2K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];

  const stats = new Array(nums.length).fill(false);

  nums = nums.sort((a, b) => a - b);

  function backtrack(path) {
    if (path.length === nums.length) {
      return ans.push([...path]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !stats[i - 1]) continue;

      if (!stats[i]) {
        path.push(nums[i]);
        stats[i] = true;

        backtrack(path);

        path.pop();
        stats[i] = false;
      } else {
        continue;
      }
    }
  }

  backtrack([]);

  return ans;
};
// @lc code=end
