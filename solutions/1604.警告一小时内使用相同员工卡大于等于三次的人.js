/*
 * @lc app=leetcode.cn id=1604 lang=javascript
 *
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 *
 * https://leetcode.cn/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/description/
 *
 * algorithms
 * Medium (42.27%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    27.6K
 * Total Submissions: 54.5K
 * Testcase Example:  '["daniel","daniel","daniel","luis","luis","luis","luis"]\n' +
  '["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]'
 *
 * 
 * 力扣公司的员工都使用员工卡来开办公室的门。每当一个员工使用一次他的员工卡，安保系统会记录下员工的名字和使用时间。如果一个员工在一小时时间内使用员工卡的次数大于等于三次，这个系统会自动发布一个
 * 警告 。
 * 
 * 给你字符串数组 keyName 和 keyTime ，其中 [keyName[i], keyTime[i]] 对应一个人的名字和他在 某一天
 * 内使用员工卡的时间。
 * 
 * 使用时间的格式是 24小时制 ，形如 "HH:MM" ，比方说 "23:51" 和 "09:49" 。
 * 
 * 请你返回去重后的收到系统警告的员工名字，将它们按 字典序升序 排序后返回。
 * 
 * 请注意 "10:00" - "11:00" 视为一个小时时间范围内，而 "22:51" - "23:52" 不被视为一小时时间范围内。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"],
 * keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
 * 输出：["daniel"]
 * 解释："daniel" 在一小时内使用了 3 次员工卡（"10:00"，"10:40"，"11:00"）。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime =
 * ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
 * 输出：["bob"]
 * 解释："bob" 在一小时内使用了 3 次员工卡（"21:00"，"21:20"，"21:30"）。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= keyName.length, keyTime.length <= 10^5
 * keyName.length == keyTime.length
 * keyTime 格式为 "HH:MM" 。
 * 保证 [keyName[i], keyTime[i]] 形成的二元对 互不相同 。
 * 1 <= keyName[i].length <= 10
 * keyName[i] 只包含小写英文字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const map = {};

  keyName.forEach((name, i) => {
    if (!map[name]) map[name] = [];

    const hour =
      (keyTime[i][0].charCodeAt() - '0'.charCodeAt()) * 10 +
      keyTime[i][1].charCodeAt() -
      '0'.charCodeAt();

    const minute =
      (keyTime[i][3].charCodeAt() - '0'.charCodeAt()) * 10 +
      keyTime[i][4].charCodeAt() -
      '0'.charCodeAt();

    map[name].push(hour * 60 + minute);
  });

  const ans = [];

  Object.entries(map).forEach(([name, times]) => {
    times.sort((a, b) => a - b);

    for (let i = 2; i < times.length; i++) {
      if (times[i] - times[i - 2] <= 60) {
        ans.push(name);
        break;
      }
    }
  });

  ans.sort();

  return ans;
};
// @lc code=end
