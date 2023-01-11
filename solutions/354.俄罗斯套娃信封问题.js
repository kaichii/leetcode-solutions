/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 *
 * https://leetcode.cn/problems/russian-doll-envelopes/description/
 *
 * algorithms
 * Hard (39.94%)
 * Likes:    852
 * Dislikes: 0
 * Total Accepted:    96.9K
 * Total Submissions: 248.7K
 * Testcase Example:  '[[5,4],[6,4],[6,7],[2,3]]'
 *
 * 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
 *
 * 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 *
 * 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 *
 * 注意：不允许旋转信封。
 *
 *
 * 示例 1：
 *
 *
 * 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
 * 输出：3
 * 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
 *
 * 示例 2：
 *
 *
 * 输入：envelopes = [[1,1],[1,1],[1,1]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= envelopes.length <= 10^5
 * envelopes[i].length == 2
 * 1 <= wi, hi <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort(([w1, h1], [w2, h2]) => w1 - w2 || h2 - h1);

  return lengthOfLIS(envelopes.map(([, h]) => h));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let piles = 0,
    n = nums.length;

  const top = new Array(n);

  for (let i = 0; i < n; i++) {
    let poker = nums[i];

    let left = 0,
      right = piles;

    while (left < right) {
      const mid = ~~(left + (right - left) / 2);

      if (top[mid] >= poker) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    if (left == piles) piles++;

    top[left] = poker;
  }

  return piles;
};
// @lc code=end
