/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode.cn/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (56.55%)
 * Likes:    895
 * Dislikes: 0
 * Total Accepted:    442.9K
 * Total Submissions: 778.9K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给你两个整数数组 nums1 和 nums2
 * ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 *
 *
 * 示例 2:
 *
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let p1 = 0,
    p2 = 0;

  const ans = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] == nums2[p2]) {
      ans.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return ans;
};
// @lc code=end
