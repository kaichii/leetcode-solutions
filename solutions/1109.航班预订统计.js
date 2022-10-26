/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 *
 * https://leetcode.cn/problems/corporate-flight-bookings/description/
 *
 * algorithms
 * Medium (62.27%)
 * Likes:    417
 * Dislikes: 0
 * Total Accepted:    96.4K
 * Total Submissions: 154.3K
 * Testcase Example:  '[[1,2,10],[2,3,20],[2,5,25]]\n5'
 *
 * 这里有 n 个航班，它们分别从 1 到 n 进行编号。
 *
 * 有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 意味着在从
 * firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
 *
 * 请你返回一个长度为 n 的数组 answer，里面的元素是每个航班预定的座位总数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
 * 输出：[10,55,45,25,25]
 * 解释：
 * 航班编号        1   2   3   4   5
 * 预订记录 1 ：   10  10
 * 预订记录 2 ：       20  20
 * 预订记录 3 ：       25  25  25  25
 * 总座位数：      10  55  45  25  25
 * 因此，answer = [10,55,45,25,25]
 *
 *
 * 示例 2：
 *
 *
 * 输入：bookings = [[1,2,10],[2,2,15]], n = 2
 * 输出：[10,25]
 * 解释：
 * 航班编号        1   2
 * 预订记录 1 ：   10  10
 * 预订记录 2 ：       15
 * 总座位数：      10  25
 * 因此，answer = [10,25]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 2 * 10^4
 * 1 <= bookings.length <= 2 * 10^4
 * bookings[i].length == 3
 * 1 <= firsti <= lasti <= n
 * 1 <= seatsi <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

var corpFlightBookings = function (bookings, n) {
  // 差分数组：差分数组第 i 项为原始数组第 i 项与 第 i-1 项的差值
  const ans = new Array(n).fill(0);

  // 构建差分数组
  for (let i = 0; i < bookings.length; i++) {
    ans[bookings[i][0] - 1] += bookings[i][2];
    if (bookings[i][1] < n) ans[bookings[i][1]] -= bookings[i][2];
  }

  // 根据差分数组还原原始数组
  for (let i = 0; i < ans.length; i++) {
    ans[i] = (ans[i - 1] || 0) + ans[i];
  }

  return ans;
};
// @lc code=end
