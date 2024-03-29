/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode.cn/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (80.29%)
 * Likes:    771
 * Dislikes: 0
 * Total Accepted:    218.2K
 * Total Submissions: 271.8K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 *
 * 完全二叉树
 * 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h
 * 层，则该层包含 1~ 2^h 个节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,4,5,6]
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：0
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目范围是[0, 5 * 10^4]
 * 0
 * 题目数据保证输入的树是 完全二叉树
 *
 *
 *
 *
 * 进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
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
 * @param {TreeNode} root
 * @return {number}
 */

// O(n)
// var countNodes = function (root) {
//   const count = (r) => {
//     if (r == null) return 0;

//     let left = count(r.left);
//     let right = count(r.right);

//     return left + right + 1;
//   };

//   return count(root);
// };

var countNodes = function (root) {
  let l = root,
    r = root;

  let lh = 0,
    rh = 0;

  while (l !== null) {
    lh++;
    l = l.left;
  }

  while (r !== null) {
    rh++;
    r = r.right;
  }

  // 满二叉树，节点数 2^h - 1
  if (lh == rh) {
    return Math.pow(2, lh) - 1;
  }

  // 普通二叉树
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
