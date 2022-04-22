/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (57.72%)
 * Likes:    1854
 * Dislikes: 0
 * Total Accepted:    465.6K
 * Total Submissions: 806.3K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = ""
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 *
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const keyMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const ans = [];

  function bt(path, currentIndex) {
    if (path.length === digits.length) {
      return ans.push(path);
    }

    for (let i = currentIndex; i < digits.length; i++) {
      // 剪枝，屏蔽不是从第一个字符开始的情况
      if (i > 0 && !path) {
        break;
      } else {
        for (let j = 0; j < keyMap[digits[i]].length; j++) {
          path += keyMap[digits[i]][j];

          bt(path, i + 1);

          path = path.slice(0, path.length - 1);
        }
      }
    }
  }

  bt('', 0);

  return ans;
};
// @lc code=end
