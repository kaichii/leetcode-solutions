/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 *
 * https://leetcode.cn/problems/advantage-shuffle/description/
 *
 * algorithms
 * Medium (47.58%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    58.7K
 * Total Submissions: 117.7K
 * Testcase Example:  '[2,7,11,15]\n[1,10,4,11]'
 *
 * 给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums2 的优势可以用满足 nums1[i] > nums2[i] 的索引 i
 * 的数目来描述。
 *
 * 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
 * 输出：[2,11,7,15]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
 * 输出：[24,32,8,12]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length <= 10^5
 * nums2.length == nums1.length
 * 0 <= nums1[i], nums2[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  // nums2 元素的索引从小到大排序
  const idx = Array.from({ length: nums2.length }, (_, i) => i).sort(
    (a, b) => nums2[a] - nums2[b]
  );

  // nums1 从小到大排序
  nums1.sort((a, b) => a - b);

  let left = 0,
    right = idx.length - 1;

  for (let num of nums1) {
    // num(当前 nums1 的最小元素) > nums2 当前的最小元素，配对成功
    if (num > nums2[idx[left]]) {
      nums2[idx[left++]] = num;
    }
    // 否则，和当前 nums2 的最大元素配对
    else {
      nums2[idx[right--]] = num;
    }
  }

  return nums2;
};
// @lc code=end
