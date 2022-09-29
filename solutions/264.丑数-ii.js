/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 *
 * https://leetcode.cn/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (58.80%)
 * Likes:    980
 * Dislikes: 0
 * Total Accepted:    141K
 * Total Submissions: 239.5K
 * Testcase Example:  '10'
 *
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 *
 * 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 10
 * 输出：12
 * 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 * 解释：1 通常被视为丑数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const uglis = new Array(n + 1);
  let p = 1,
    p2 = 1,
    p3 = 1,
    p5 = 1,
    product2 = 1,
    product3 = 1,
    product5 = 1;

  while (p <= n) {
    const min = Math.min(product2, product3, product5);

    uglis[p] = min;
    p++;

    if (min == product2) {
      product2 = uglis[p2] * 2;
      p2++;
    }
    if (min == product3) {
      product3 = uglis[p3] * 3;
      p3++;
    }
    if (min == product5) {
      product5 = uglis[p5] * 5;
      p5++;
    }
  }

  return uglis[n];
};
// @lc code=end
