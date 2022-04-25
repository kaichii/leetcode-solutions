/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (60.23%)
 * Likes:    3376
 * Dislikes: 0
 * Total Accepted:    463.2K
 * Total Submissions: 764.1K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  /**
   *
   * 每个 index 处能否储水取决于该处是否被围起来
   * 满足条件则储存水量为: 该处两侧中较矮的高度 - height[index]
   * example: [0,1,0,2,1,0,1,3,2,1,2,1] index = 2, 左侧最高：1，右侧最高：3，当前高 0，可储水量：1 - 0 = 1
   *
   */

  let ans = 0,
    i = 0,
    j = height.length - 1,
    iLeftMax = 0,
    jRightMax = 0;

  /**
   *
   * i 左侧最高 iLeftMax, 右侧最高 iRightMax
   * j 左侧最高 jLeftMax, 右侧最高 jRightMax
   *
   * 存在恒不等式:
   *
   *  1. iRightMax >= jRightMax, 因为 i < j, i 右侧包含 j 的右侧
   *
   *  2. jLeftMax >= iLeftMax, 因为 i < j, j 的左侧包含 i 的左侧
   *
   */

  while (i < j) {
    // iLeftMax >= height[i]
    iLeftMax = Math.max(iLeftMax, height[i]);

    // jRightMax >= height[j]
    jRightMax = Math.max(jRightMax, height[j]);

    if (iLeftMax < jRightMax) {
      // 因为 恒不等式 1 可得
      // iRightMax >= iLeftMax >= height[i]
      // 可以储水（包括 0）
      // 水量: min(iRightMax, iLeftMax) - 当前高度 = iLeftMax - height[i]
      ans += iLeftMax - height[i];

      // 增大 iLeftMax
      i++;
    } else {
      // 因为 恒不等式 2 得
      // jLeftMax >= jRightMax >= height[j]
      // 可以储水（包括 0）
      // 水量: min(jLeftMax, jRightMax) - 当前高度 = jRightMax - height[j]
      ans += jRightMax - height[j];

      // 增大 jRightMax
      j--;
    }
  }

  return ans;
};
// @lc code=end
