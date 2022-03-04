/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode(-1);

  let c = head;

  let t = 0;

  while (l1 || l2) {
    if (l1) {
      t += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      t += l2.val;
      l2 = l2.next;
    }

    c.next = new ListNode(t % 10);

    c = c.next;

    t = Math.floor(t / 10);
  }

  if (t > 0) c.next = new ListNode(t);

  return head.next;
};
// @lc code=end
