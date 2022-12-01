/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 *
 * https://leetcode.cn/problems/random-pick-with-blacklist/description/
 *
 * algorithms
 * Hard (44.15%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    27.1K
 * Total Submissions: 61.7K
 * Testcase Example:  '["Solution","pick","pick","pick","pick","pick","pick","pick"]\n' +
  '[[7,[2,3,5]],[],[],[],[],[],[],[]]'
 *
 * 给定一个整数 n 和一个 无重复 黑名单整数数组 blacklist 。设计一种算法，从 [0, n - 1] 范围内的任意整数中选取一个 未加入
 * 黑名单 blacklist 的整数。任何在上述范围内且不在黑名单 blacklist 中的整数都应该有 同等的可能性 被返回。
 * 
 * 优化你的算法，使它最小化调用语言 内置 随机函数的次数。
 * 
 * 实现 Solution 类:
 * 
 * 
 * Solution(int n, int[] blacklist) 初始化整数 n 和被加入黑名单 blacklist 的整数
 * int pick() 返回一个范围为 [0, n - 1] 且不在黑名单 blacklist 中的随机整数
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入
 * ["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"]
 * [[7, [2, 3, 5]], [], [], [], [], [], [], []]
 * 输出
 * [null, 0, 4, 1, 6, 1, 0, 4]
 * 
 * 解释
 * Solution solution = new Solution(7, [2, 3, 5]);
 * solution.pick(); // 返回0，任何[0,1,4,6]的整数都可以。注意，对于每一个pick的调用，
 * ⁠                // 0、1、4和6的返回概率必须相等(即概率为1/4)。
 * solution.pick(); // 返回 4
 * solution.pick(); // 返回 1
 * solution.pick(); // 返回 6
 * solution.pick(); // 返回 1
 * solution.pick(); // 返回 0
 * solution.pick(); // 返回 4
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= n <= 10^9
 * 0 <= blacklist.length <= min(10^5, n - 1)
 * 0 <= blacklist[i] < n
 * blacklist 中所有值都 不同
 * pick 最多被调用 2 * 10^4 次
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  /**
   * 想象构建一个连续净凑的合法值的数组，存储黑名单的值到合法值的映射
   * 相当于将黑名单的值移动到数组末尾
   */

  this.size = n - blacklist.length;

  // 存储黑名单元素 -> 正常元素的映射
  this.mapping = {};

  for (const b of blacklist) {
    this.mapping[b] = true;
  }

  let last = n - 1;

  for (const b of blacklist) {
    // 已经在黑名单范围【n - blacklist.length, n) 的元素不需要在映射
    if (b >= this.size) {
      continue;
    }

    // 过滤掉黑名单的元素
    while (this.mapping[last]) {
      last--;
    }

    // last 一定是不在黑名单的元素
    this.mapping[b] = last;
    last--;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  const r = Math.floor(Math.random() * this.size);

  // 在黑名单内，返回映射的非黑名单的值
  if (this.mapping[r]) {
    return this.mapping[r];
  }
  return r;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end
