/*
 * @lc app=leetcode.cn id=1140 lang=javascript
 *
 * [1140] 石子游戏 II
 *
 * https://leetcode.cn/problems/stone-game-ii/description/
 *
 * algorithms
 * Medium (66.26%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    11.7K
 * Total Submissions: 17.4K
 * Testcase Example:  '[2,7,9,4,4]'
 *
 * 爱丽丝和鲍勃继续他们的石子游戏。许多堆石子 排成一行，每堆都有正整数颗石子 piles[i]。游戏以谁手中的石子最多来决出胜负。
 *
 * 爱丽丝和鲍勃轮流进行，爱丽丝先开始。最初，M = 1。
 *
 * 在每个玩家的回合中，该玩家可以拿走剩下的 前 X 堆的所有石子，其中 1 <= X <= 2M。然后，令 M = max(M, X)。
 *
 * 游戏一直持续到所有石子都被拿走。
 *
 * 假设爱丽丝和鲍勃都发挥出最佳水平，返回爱丽丝可以得到的最大数量的石头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：piles = [2,7,9,4,4]
 * 输出：10
 * 解释：如果一开始Alice取了一堆，Bob取了两堆，然后Alice再取两堆。爱丽丝可以得到2 + 4 + 4 =
 * 10堆。如果Alice一开始拿走了两堆，那么Bob可以拿走剩下的三堆。在这种情况下，Alice得到2 + 7 = 9堆。返回10，因为它更大。
 *
 *
 * 示例 2:
 *
 *
 * 输入：piles = [1,2,3,4,5,100]
 * 输出：104
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= piles.length <= 100
 * 1 <= piles[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const preSum = new Array(piles.length + 1).fill(0);

  for (let i = 0; i < piles.length; i++) {
    preSum[i + 1] = preSum[i] + piles[i];
  }

  const memo = {};

  /**
   *
   * @param {number} i 已被取走的元素索引
   * @param {number} m 当前的 m
   * @return {number} 接下来取石头可以多取的数量
   */
  function dp(i, m) {
    if (i == piles.length) return 0;

    const k = i * 201 + m;
    if (!(k in memo)) {
      let maxVal = -Infinity;

      for (let x = 1; x <= 2 * m; x++) {
        if (i + x > piles.length) break;

        maxVal = Math.max(
          maxVal,
          preSum[i + x] - preSum[i] - dp(i + x, Math.max(m, x))
        );
      }

      memo[k] = maxVal;
    }

    return memo[k];
  }

  return (dp(0, 1) + preSum[preSum.length - 1]) >> 1;
};
// @lc code=end
