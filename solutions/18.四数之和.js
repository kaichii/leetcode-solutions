/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (39.30%)
 * Likes:    1208
 * Dislikes: 0
 * Total Accepted:    303.4K
 * Total Submissions: 771.9K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *`
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    for (let j = nums.length - 1; j >= 0; j--) {
      if (nums[j] === nums[j + 1]) continue;

      let i1 = i + 1;
      let j1 = j - 1;

      while (i1 < j1) {
        const sum = nums[i] + nums[i1] + nums[j] + nums[j1];

        if (sum > target) {
          j1--;
        }

        if (sum < target) {
          i1++;
        }

        if (sum === target) {
          ans.push([nums[i], nums[i1], nums[j], nums[j1]]);

          while (i1 < j1 && nums[i1] === nums[i1 + 1]) {
            i1++;
          }

          while (i1 < j1 && nums[j1] === nums[j1 - 1]) {
            j1--;
          }

          i1++;
          j1--;
        }
      }
    }
  }

  return ans;
};
// @lc code=end
