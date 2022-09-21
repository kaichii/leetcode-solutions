/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (67.89%)
 * Likes:    277
 * Dislikes: 0
 * Total Accepted:    30.8K
 * Total Submissions: 45.4K
 * Testcase Example:  '[1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]'
 *
 * 给定两个整数数组，preorder 和 postorder ，其中 preorder 是一个具有 无重复 值的二叉树的前序遍历，postorder
 * 是同一棵树的后序遍历，重构并返回二叉树。
 *
 * 如果存在多个答案，您可以返回其中 任何 一个。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
 * 输出：[1,2,3,4,5,6,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入: preorder = [1], postorder = [1]
 * 输出: [1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= preorder.length <= 30
 * 1 <= preorder[i] <= preorder.length
 * preorder 中所有值都 不同
 * postorder.length == preorder.length
 * 1 <= postorder[i] <= postorder.length
 * postorder 中所有值都 不同
 * 保证 preorder 和 postorder 是同一棵二叉树的前序遍历和后序遍历
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const postorderMap = new Map();

  postorder.forEach((p, i) => postorderMap.set(p, i));

  function build(preorder, preS, preE, postorder, postS, postE) {
    if (preS > preE) return null;

    if (preS == preE) return new TreeNode(preorder[preS]);

    const root = preorder[preS];
    const tree = new TreeNode(root);
    const postIndex = postorderMap.get(preorder[preS + 1]);
    const leftSize = postIndex - postS;

    tree.left = build(
      preorder,
      preS + 1,
      preS + 1 + leftSize,
      postorder,
      postS,
      postS + leftSize
    );

    tree.right = build(
      preorder,
      preS + 1 + leftSize + 1,
      preE,
      postorder,
      postS + leftSize + 1,
      postE - 1
    );

    return tree;
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};
// @lc code=end
