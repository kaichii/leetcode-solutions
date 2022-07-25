/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 *
 * https://leetcode-cn.com/problems/bulb-switcher/description/
 *
 * algorithms
 * Medium (57.24%)
 * Likes:    309
 * Dislikes: 0
 * Total Accepted:    51.7K
 * Total Submissions: 90.3K
 * Testcase Example:  '3'
 *
 * 初始时有 n 个灯泡处于关闭状态。第一轮，你将会打开所有灯泡。接下来的第二轮，你将会每两个灯泡关闭第二个。
 *
 * 第三轮，你每三个灯泡就切换第三个灯泡的开关（即，打开变关闭，关闭变打开）。第 i 轮，你每 i 个灯泡就切换第 i 个灯泡的开关。直到第 n
 * 轮，你只需要切换最后一个灯泡的开关。
 *
 * 找出并返回 n 轮后有多少个亮着的灯泡。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：n = 3
 * 输出：1
 * 解释：
 * 初始时, 灯泡状态 [关闭, 关闭, 关闭].
 * 第一轮后, 灯泡状态 [开启, 开启, 开启].
 * 第二轮后, 灯泡状态 [开启, 关闭, 开启].
 * 第三轮后, 灯泡状态 [开启, 关闭, 关闭].
 *
 * 你应该返回 1，因为只有一个灯泡还亮着。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 0
 * 输出：0
 *
 *
 * 示例 3：
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
 * 0 <= n <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  if (!n) return 0;

  // console.log('1', test(1));
  // console.log('2', test(2));
  // console.log('3', test(3));
  // console.log('8', test(8));
  // console.log('9', test(9));
  // console.log('10', test(10));
  // console.log('11', test(11));
  // console.log('12', test(12));
  // console.log('13', test(13));
  // console.log('14', test(14));
  // console.log('15', test(15));
  // console.log('16', test(16));
  // console.log('17', test(17));
  // console.log('18', test(18));
  // console.log('19', test(19));
  // console.log('24', test(24));
  // console.log('25', test(25));
  // console.log('26', test(26));

  return ~~Math.sqrt(n);
};

// function test(n) {
//   const board = Array.from({ length: n }, () => new Array(n).fill(false));

//   for (let i = 0; i < n; i++) {
//     // 第一轮
//     if (i === 0) {
//       board[i] = new Array(n).fill(true);
//     }

//     // 第二轮
//     else if (i === 1) {
//       board[i] = [...board[i - 1]];

//       board[i].forEach((l, idx) => {
//         if (idx % (i + 1) === i) {
//           board[i][idx] = false;
//         }
//       });
//     }

//     // ...
//     else if (i > 1 && i < n - 1) {
//       board[i] = [...board[i - 1]];

//       board[i].forEach((l, idx) => {
//         if (idx % (i + 1) === i) {
//           board[i][idx] = !board[i][idx];
//         }
//       });
//     }

//     // 最后一轮
//     else {
//       board[i] = [...board[i - 1]];

//       board[i][n - 1] = !board[i][n - 1];
//     }
//   }

//   return board[n - 1].reduce((a, c) => {
//     if (c) {
//       a++;
//     }
//     return a;
//   }, 0);
// }
// @lc code=end
