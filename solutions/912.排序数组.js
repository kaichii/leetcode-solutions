/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 *
 * https://leetcode.cn/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (55.28%)
 * Likes:    742
 * Dislikes: 0
 * Total Accepted:    479.3K
 * Total Submissions: 883.1K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return nums.sort((a, b) => a - b);
};

// 归并排序：11/18 超时
function mergeSort(nums, lo, hi) {
  // 单个元素不需要排序
  if (lo == hi) return;

  function merge(nums, lo, mid, hi) {
    const temp = Array.from(nums);

    // 双指针合并两个排序好的数组
    let i = lo,
      j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      // 左半边已经合并完了
      if (i == mid + 1) {
        nums[k] = temp[j++];
      }
      // 右半边已经合并完了
      else if (j == hi + 1) {
        nums[k] = temp[i++];
      }
      // 采用较小的值
      else if (temp[i] > temp[j]) {
        nums[k] = temp[j++];
      } else {
        nums[k] = temp[i++];
      }
    }
  }

  // 防止溢出
  const mid = ~~(lo + (hi - lo) / 2);

  // 排序左边
  mergeSort(nums, lo, mid);

  // 排序右边
  mergeSort(nums, mid + 1, hi);

  // 合并排序好的数组
  merge(nums, lo, mid, hi);
}

// 快排：11/18 超时
function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = nums[0];
  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
// @lc code=end
