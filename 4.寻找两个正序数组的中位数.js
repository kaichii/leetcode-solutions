/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.12%)
 * Likes:    5081
 * Dislikes: 0
 * Total Accepted:    627.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;

  if (total % 2 === 1) {
    const mIndex = Math.floor(total / 2);
    return getKthElement(nums1, nums2, mIndex + 1);
  } else {
    const mIndex = total / 2;
    return (
      (getKthElement(nums1, nums2, mIndex) +
        getKthElement(nums1, nums2, mIndex + 1)) /
      2
    );
  }
};

// 找到两个排好序数组的第 k 小的元素
// 原理： 两个数组中小于各自 k/2-1 的部分不可能为第 k 小的元素
// max: (k/2-1 + k/2 -1 = k-2) < k , 故可以根据大小比较排除掉小的部分
function getKthElement(nums1, nums2, k) {
  const length1 = nums1.length,
    length2 = nums2.length;

  // 初始下标为 0
  let index1 = 0,
    index2 = 0;

  while (true) {
    // 如果 nums1 的下标已经到了末尾，则返回 nums2 中第 k(减去排除掉的元素个数) 小的元素
    if (index1 == length1) {
      return nums2[index2 + k - 1];
    }
    // 如果 nums2 的下标已经到了末尾，则返回 nums1 中第 k(减去排除掉的元素个数) 小的元素
    if (index2 == length2) {
      return nums1[index1 + k - 1];
    }
    // k 为 1 时，两个数组的当前下标的最小值即为第 k 小的元素
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }

    const half = Math.floor(k / 2);

    // index1 的下一个下标， index1 + half - 1, 不超过 length1 - 1
    const newIndex1 = Math.min(index1 + half, length1) - 1;
    // index2 的下一个下标， index2 + half - 1, 不超过 length1 - 1
    const newIndex2 = Math.min(index2 + half, length2) - 1;

    // nums1 的值较大，
    if (nums1[newIndex1] > nums2[newIndex2]) {
      // k 减掉这次被排除元素的个数，新下标 - 旧下标 + 1
      k -= newIndex2 - index2 + 1;
      // 排除掉 nums2 的 [0 - newIndex2] 部分
      index2 = newIndex2 + 1;
    } else {
      // k 减掉这次被排除元素的个数，新下标 - 旧下标 + 1
      k -= newIndex1 - index1 + 1;
      // 排除掉 nums1 的 [0 - newIndex1] 部分
      index1 = newIndex1 + 1;
    }
  }
}
// @lc code=end
