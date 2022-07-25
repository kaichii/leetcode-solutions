/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (37.45%)
 * Likes:    1652
 * Dislikes: 0
 * Total Accepted:    294.6K
 * Total Submissions: 785.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 *
 *
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 *
 *
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列
 * 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 *
 *
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 *
 *
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 *
 * 必须 原地 修改，只允许使用额外常数空间。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  /**
   * 1.从后向前查找一个较小数 nums[i] < nums[i + 1]，即从后向前第一个不满足降序排列的数 nums[i]（如果没找到，这该序列为降序，跳到第三步，得到升序列）。
   * 2.从 [i + 1, n) 从后向前查找一个较大数 nums[j] > nums[i]，即较小数右侧的降序数列中大于 nums[i] 的最小数。
   * 3.调换较小数和较大数,反转 [i + 1, n)。
   *
   * example: [1,5,3,4,2] => [1,5,4,2,3]
   *  1. 较小数: nums[2] = 3
   *  2. 较大数: nums[3] = 4
   *  3. 调换: [1,5,4,3,2], 反转: [1,5,4,2,3], bingo!
   */

  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    while (j > i && nums[j] <= nums[i]) {
      j--;
    }

    swap(nums, i, j);
  }

  reverse(nums, i + 1);
};

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function reverse(arr, start) {
  let i = start,
    j = arr.length - 1;

  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}
// @lc code=end
