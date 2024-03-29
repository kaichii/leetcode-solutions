/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 *
 * https://leetcode.cn/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (72.75%)
 * Likes:    1354
 * Dislikes: 0
 * Total Accepted:    154.9K
 * Total Submissions: 212.3K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
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
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function buildTree(lo, hi) {
    let ans = [];

    if (lo > hi) {
      ans.push(null);
      return ans;
    }

    for (let mid = lo; mid <= hi; mid++) {
      const left = buildTree(lo, mid - 1);
      const right = buildTree(mid + 1, hi);

      for (const l of left) {
        for (const r of right) {
          const node = new TreeNode(mid);
          node.left = l;
          node.right = r;

          ans.push(node);
        }
      }
    }

    return ans;
  }

  return buildTree(1, n);
};
// @lc code=end
