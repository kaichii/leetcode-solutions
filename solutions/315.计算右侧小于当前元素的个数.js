/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 *
 * https://leetcode.cn/problems/count-of-smaller-numbers-after-self/description/
 *
 * algorithms
 * Hard (42.96%)
 * Likes:    920
 * Dislikes: 0
 * Total Accepted:    76K
 * Total Submissions: 175.9K
 * Testcase Example:  '[5,2,6,1]'
 *
 * 给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i]
 * 右侧小于 nums[i] 的元素的数量。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,2,6,1]
 * 输出：[2,1,1,0]
 * 解释：
 * 5 的右侧有 2 个更小的元素 (2 和 1)
 * 2 的右侧仅有 1 个更小的元素 (1)
 * 6 的右侧有 1 个更小的元素 (1)
 * 1 的右侧有 0 个更小的元素
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-1]
 * 输出：[0]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [-1,-1]
 * 输出：[0,0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const counts = new Array(nums.length);

  const arr = nums.map((n, i) => {
    counts[i] = 0;
    return { index: i, value: n };
  });

  function mergeSort(arr, lo, hi) {
    // 单个元素不需要排序
    if (lo == hi) return;

    function merge(arr, lo, mid, hi) {
      const temp = Array.from(arr);

      // 双指针合并两个排序好的数组
      let i = lo,
        j = mid + 1;

      for (let k = lo; k <= hi; k++) {
        // 左半边已经合并完了
        if (i == mid + 1) {
          arr[k] = temp[j++];
        }
        // 右半边已经合并完了
        else if (j == hi + 1) {
          arr[k] = temp[i++];
          counts[arr[k].index] += j - (mid + 1);
        }
        // 采用较小的值
        else if (temp[i].value > temp[j].value) {
          arr[k] = temp[j++];
        } else {
          arr[k] = temp[i++];
          counts[arr[k].index] += j - (mid + 1);
        }
      }
    }

    // 防止溢出
    const mid = ~~(lo + (hi - lo) / 2);

    // 排序左边
    mergeSort(arr, lo, mid);

    // 排序右边
    mergeSort(arr, mid + 1, hi);

    // 合并排序好的数组
    merge(arr, lo, mid, hi);
  }

  mergeSort(arr, 0, arr.length - 1);

  return counts;
};
// @lc code=end
