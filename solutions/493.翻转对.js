/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 *
 * https://leetcode.cn/problems/reverse-pairs/description/
 *
 * algorithms
 * Hard (35.83%)
 * Likes:    390
 * Dislikes: 0
 * Total Accepted:    36.8K
 * Total Submissions: 101.8K
 * Testcase Example:  '[1,3,2,3,1]'
 *
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 *
 * 你需要返回给定数组中的重要翻转对的数量。
 *
 * 示例 1:
 *
 *
 * 输入: [1,3,2,3,1]
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: [2,4,3,5,1]
 * 输出: 3
 *
 *
 * 注意:
 *
 *
 * 给定数组的长度不会超过50000。
 * 输入数组中的所有数字都在32位整数的表示范围内。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let count = 0;

  function mergeSort(nums, lo, hi) {
    // 单个元素不需要排序
    if (lo == hi) return;

    function merge(nums, lo, mid, hi) {
      const temp = Array.from(nums);

      let end = mid + 1;

      for (let i = lo; i <= mid; i++) {
        while (end <= hi && nums[i] > 2 * nums[end]) {
          end++;
        }
        count += end - mid - 1;
      }

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

  mergeSort(nums, 0, nums.length - 1);

  return count;
};

// @lc code=end
