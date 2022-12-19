/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode.cn/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (70.72%)
 * Likes:    2034
 * Dislikes: 0
 * Total Accepted:    319.3K
 * Total Submissions: 451K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：5
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
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
var numTrees = function (n) {
  const memo = Array.from({ length: n }, () => new Array(n).fill(0));

  const count = (lo, hi) => {
    if (lo > hi) return 1;

    if (memo[lo][hi] !== 0) {
      return memo[lo][hi];
    }

    let c = 0;

    for (let mid = lo; mid <= hi; mid++) {
      const left = count(lo, mid - 1);
      const right = count(mid + 1, hi);

      c += left * right;
    }

    memo[lo][hi] = c;

    return c;
  };

  return count(0, n - 1);
};
// @lc code=end
