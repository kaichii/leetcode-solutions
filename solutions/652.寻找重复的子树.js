/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 *
 * https://leetcode.cn/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (61.21%)
 * Likes:    630
 * Dislikes: 0
 * Total Accepted:    85.7K
 * Total Submissions: 140K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * 给你一棵二叉树的根节点 root ，返回所有 重复的子树 。
 *
 * 对于同一类的重复子树，你只需要返回其中任意 一棵 的根结点即可。
 *
 * 如果两棵树具有 相同的结构 和 相同的结点值 ，则认为二者是 重复 的。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,2,3,4,null,2,4,null,null,4]
 * 输出：[[2,4],[4]]
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root = [2,1,1]
 * 输出：[[1]]
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：root = [2,2,2,3,null,3,null]
 * 输出：[[2,3],[3]]
 *
 *
 *
 * 提示：
 *
 *
 * 树中的结点数在 [1, 5000] 范围内。
 * -200 <= Node.val <= 200
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
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const ans = [];
  const treeMap = new Map();

  function traverse(r) {
    if (r == null) return '#';

    const left = traverse(r.left);
    const right = traverse(r.right);

    const tree = `${left},${right},${r.val}`;

    let times = treeMap.get(tree);

    if (times == 1) {
      ans.push(r);
    }

    treeMap.set(tree, (times ?? 0) + 1);

    return tree;
  }

  traverse(root);

  return ans;
};
// @lc code=end
