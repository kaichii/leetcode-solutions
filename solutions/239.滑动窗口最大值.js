/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (50.04%)
 * Likes:    1949
 * Dislikes: 0
 * Total Accepted:    373.3K
 * Total Submissions: 746.7K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回 滑动窗口中的最大值 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  const ans = [],
    // 保持最大值在最左侧
    queue = [];

  for (let i = 0; i < nums.length; i++) {
    if (queue.length == 0) {
      queue.push(nums[i]);
    } else {
      // 窗口中影响队列中最大值的值要移出队列
      if (i - k >= 0 && nums[i - k] == queue[0]) queue.shift();
      // 移除队列中比 nums[i] 小的值，并插入队列
      while (queue.length > 0 && nums[i] > queue[queue.length - 1]) {
        queue.pop();
      }
      queue.push(nums[i]);
    }

    if (i + 1 >= k) {
      ans.push(queue[0]);
    }
  }

  return ans;
};
// @lc code=end
